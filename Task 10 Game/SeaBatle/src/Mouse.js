//Мышка
class Mouse {
    element = null;

    under = false;
    pUnder = false; //Состояние прошлого тика

    x = null;
    y = null;

    pX = null;
    pY = null;

    //Кнопки
    left = false;
    pLeft = false;
    //Колёсик
    delta = 0;
    pDelta = 0;

    constructor(element) {
        this.element = element;

        const update = (e) => {
            this.x = e.clientX;
            this.y = e.clientY;
            this.delta = 0;
            this.under = true;
        };

        element.addEventListener("mousemove", (e) => {
            this.tick();
            update(e);
        });

        element.addEventListener("mouseenter", (e) => {//граница заход
            this.tick();
            update(e);
        });

        element.addEventListener("mouseleave", (e) => {//граница уход
            this.tick();
            update(e);

            this.under = false;
        });

        element.addEventListener("mousedown", (e) => {//нажали
            this.tick();
            update(e);

            if (e.button === 0) {
                this.left = true;
            }
        });

        element.addEventListener("mouseup", (e) => {//отжали
            this.tick();
            update(e);

            if (e.button === 0) {
                this.left = false;
            }
        });

        element.addEventListener("wheel", (e) => {//Крутим колёсик
            this.tick();

            this.x = e.clientX;
            this.y = e.clientY;
            this.delta = e.deltaY > 0 ? 1 : -1;
            this.under = true;
        });
    }

    tick() {//Храним прошлое состояние
        this.pX = this.x;
        this.pY = this.y;
        this.pUnder = this.under;
        this.pLeft = this.left;
        this.pDelta = this.delta;
        this.delta = 0;
    }
}
