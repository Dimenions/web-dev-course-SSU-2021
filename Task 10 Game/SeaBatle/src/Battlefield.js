//Игровое поле (логика)
class Battlefield {
    ships = [];
    shots = [];

    _private_matrix = null;
    _private_changed = true;//Изменился ли

    get loser() {//Если не найдем живой корабль, то игрок проиграл
        for (const ship of this.ships) {
            if (!ship.killed) {
                return false;
            }
        }
        return true;
    }

    get matrix() {//Контроль за изменениями матрих
        if (!this._private_changed) {
            this._private_matrix;
        }
        //Создаём матрицу
        const matrix = [];

        for (let y = 0; y < 10; y++) {
            const row = [];

            for (let x = 0; x < 10; x++) {
                const item = {
                    x,
                    y,
                    ship: null,
                    free: true,

                    shoted: false,
                    wounded: false,
                };

                row.push(item);
            }

            matrix.push(row);
        }

        for (const ship of this.ships) {//Смотрим корабли
            if (!ship.placed) {
                continue;
            }

            const {x, y} = ship;
            const dx = ship.direction === "row";//Ориентация
            const dy = ship.direction === "column";

            for (let i = 0; i < ship.size; i++) {
                const cx = x + dx * i;
                const cy = y + dy * i;

                const item = matrix[cy][cx];
                item.ship = ship;
            }

            //Чтобы другие корабли не стояли рядом
            for (let y = ship.y - 1; y < ship.y + ship.size * dy + dx + 1; y++) {
                for (let x = ship.x - 1; x < ship.x + ship.size * dx + dy + 1; x++) {
                    if (this.inField(x, y)) {
                        const item = matrix[y][x];
                        item.free = false;
                    }
                }
            }
        }

        for (const {x, y} of this.shots) {//Пробегаемся по выстрелам
            const item = matrix[y][x];
            item.shoted = true;

            if (item.ship) {//Если корабль, то рана
                item.wounded = true;
            }
        }

        this._private_matrix = matrix;
        this._private_changed = false;

        return this._private_matrix;
    }

    get complete() {//Готов к бою (расположены всен 10 кораблей)
        if (this.ships.length !== 10) {
            return false;
        }

        for (const ship of this.ships) {
            if (!ship.placed) {
                return false;
            }
        }

        return true;
    }

    inField(x, y) {//Лежат ли х и у в игровом поле
        const isNumber = (n) =>
            parseInt(n) === n && !isNaN(n) && ![Infinity, -Infinity].includes(n);

        if (!isNumber(x) || !isNumber(y)) {
            return false;
        }

        return 0 <= x && x < 10 && 0 <= y && y < 10;
    }

    addShip(ship, x, y) {//Добавить корабль
        if (this.ships.includes(ship)) {
            return false;
        }

        this.ships.push(ship);

        if (this.inField(x, y)) {//Проверка можем ли мы добавить корабль
            const dx = ship.direction === "row";
            const dy = ship.direction === "column";

            let placed = true;

            for (let i = 0; i < ship.size; i++) {
                const cx = x + dx * i;
                const cy = y + dy * i;

                if (!this.inField(cx, cy)) {//поле
                    placed = false;
                    break;
                }

                const item = this.matrix[cy][cx];
                if (!item.free) {//другой корабль
                    placed = false;
                    break;
                }
            }

            if (placed) {//добавляем
                Object.assign(ship, {x, y});
            }
        }

        this._private_changed = true;
        return true;
    }

    removeShip(ship) {//Удалить корабль
        if (!this.ships.includes(ship)) {
            return false;
        }

        const index = this.ships.indexOf(ship);
        this.ships.splice(index, 1);//Удаляем из массива

        ship.x = null;
        ship.y = null;

        this._private_changed = true;
        return true;
    }

    removeAllShips() {
        const ships = this.ships.slice();

        for (const ship of ships) {
            this.removeShip(ship);
        }

        return ships.length;
    }

    addShot(shot) {
        for (const {x, y} of this.shots) {
            if (x === shot.x && y === shot.y) {//Был ли уже выстрел 
                return false;
            }
        }

        this.shots.push(shot);
        this._private_changed = true;

        const matrix = this.matrix;
        const {x, y} = shot;

        if (matrix[y][x].ship) {
            shot.setVariant("wounded");

            const {ship} = matrix[y][x];
            const dx = ship.direction === "row";
            const dy = ship.direction === "column";

            let killed = true;

            for (let i = 0; i < ship.size; i++) {//Проходимся по кораблю, если последний шот, то смерть
                const cx = ship.x + dx * i;
                const cy = ship.y + dy * i;
                const item = matrix[cy][cx];

                if (!item.wounded) {//Есть ли не раненая палуба
                    killed = false;
                    break;
                }
            }

            if (killed) {
                ship.killed = true;

                for (let i = 0; i < ship.size; i++) {
                    const cx = ship.x + dx * i;
                    const cy = ship.y + dy * i;

                    const shot = this.shots.find(//тут
                        (shot) => shot.x === cx && shot.y === cy
                    );
                    shot.setVariant("killed");
                }
            }
            
        }

        this._private_changed = true;
        return true;
    }

    removeShot(shot) {
        if (!this.shots.includes(shot)) {
            return false;
        }

        const index = this.shots.indexOf(shot);
        this.shots.splice(index, 1);

        this._private_changed = true;
        return true;
    }

    removeAllShots() {
        const shots = this.shots.slice();

        for (const shot of shots) {
            this.removeShot(shot);
        }

        return shots.length;
    }

    randomize(ShipClass = Ship) {//Случайное выставление
        this.removeAllShips();

        for (let size = 4; size >= 1; size--) {
            for (let n = 0; n < 5 - size; n++) {
                const direction = getRandomFrom("row", "column");
                const ship = new ShipClass(size, direction);

                while (!ship.placed) {
                    const x = getRandomBetween(0, 9);
                    const y = getRandomBetween(0, 9);

                    this.removeShip(ship);
                    this.addShip(ship, x, y);
                }
            }
        }
    }

    clear() {
        this.removeAllShots();
        this.removeAllShips();
    }
}
