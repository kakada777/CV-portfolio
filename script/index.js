$(document).ready(() => new Controller());
    
class Controller {
    constructor() {
        this.view = new View();
        this.data = new Data();
        this.data1 = new Data();
        this.data2 = new Data();
        this.BindEvent();
    }

    BindEvent() {
        // Show all by default
        const allProducts = [
            ...this.data.data,
            ...this.data1.data1,
            ...this.data2.data2
        ];
        this.view.drawCard(allProducts);

        // ALL
        this.view.addEventClickOnBtnAll(e => {
            const all = [
                ...this.data.data,
                ...this.data1.data1,
                ...this.data2.data2
            ];
            this.view.drawCard(all);
        });

        // MALE
        this.view.addEventClickOnBtnMale(e => {
            const male = this.data.data.filter(v => v.Type.toLowerCase() === "male");
            this.view.drawCard(male);
        });

        // FEMALE
        this.view.addEventClickOnBtnFemale(e => {
            const female = this.data1.data1.filter(v => v.Type.toLowerCase() === "female");
            this.view.drawCard(female);
        });

        // KIDS
        this.view.addEventClickOnBtnKids(e => {
            const kids = this.data2.data2.filter(v => v.Type.toLowerCase() === "kids");
            this.view.drawCard(kids);
        });
    }
}


    class View {
        constructor() {
            this.data = new Data();;
            this.data1 = new Data();;
            this.data2 = new Data();;

        }

        drawCard(data) {
            let html = "";
            data.map(v => {
                html += `
                    <div class="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12  mt-4" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="4500">
                        <div class="card" style="width: 18rem;">
                            <img src="${v.Image}" class="card-img-top" alt="">
                        </div>
                    </div>
                `
            })

            $(".draw-card").html(html);
        }


        addEventClickOnBtnAll(callBack) {
            $("#all").click(e => callBack(e));
        }

        addEventClickOnBtnMale(callBack) {
            $("#male").click(e => callBack(e));
        }

        addEventClickOnBtnFemale(callBack) {
            $("#female").click(e => callBack(e));
        }
        addEventClickOnBtnKids(callBack) {
            $("#kids").click(e => callBack(e));
        }
    }

    class Data {
        constructor() {
            this.data = [
                {
                    Name: "Nike Air",
                    Type: "male",
                    price : '50$',
                    Image: "./Picture/Coffee-1.jpg"
                },
                {

                    Name: "Blood Test Tub",
                    Type: "male",
                    price : '45$',
                    Image: "./Picture/Coffee-2.jpg"
                },
                {
                    Name: "Blood Test Tub",
                    Type: "male",
                    price : '29$',
                    Image: "./Picture/Coffee-3.jpg"
                },
                {
                    Name: "Blood Test Tub",
                    Type: "male",
                    price : '61$',
                    Image: "./Picture/Coffee-4.jpg"
                },
                {
                    Name: "Blood Test Tub",
                    Type: "male",
                    price : '61$',
                    Image: "./Picture/Coffee-5.jpg"
                },
                {
                    Name: "Blood Test Tub",
                    Type: "male",
                    price : '76$',
                    Image: "./Picture/Coffee-6.jpg"
                },
                {
                    Name: "Blood Test Tub",
                    Type: "male",
                    price : '55$',
                    Image: "./Picture/Coffee-7.jpg"
                },
                {
                    Name: "Blood Test Tub",
                    Type: "male",
                    price : '32$',
                    Image: "./Picture/Coffee-8.jpg"
                },
                {
                    Name: "Blood Test Tub",
                    Type: "male",
                    price : '32$',
                    Image: "./Picture/Coffee-9.jpg"
                },
                {
                    Name: "Blood Test Tub",
                    Type: "male",
                    price : '32$',
                    Image: "./Picture/Coffee-10.jpg"
                },
                {
                    Name: "Blood Test Tub",
                    Type: "male",
                    price : '32$',
                    Image: "./Picture/Coffee-11.jpg"
                },
            ]
        this.data1 = [
            {
                Name: "Blood Test Tub",
                Type: "female",
                price : '27$',
                Image: "./Picture/Burger-1.jpg"
            },
            {

                Name: "Blood Test Tub",
                Type: "female",
                price : '30$',
                Image: "./Picture/Burger-2.jpg"
            },
            {
                Name: "Blood Test Tub",
                Type: "female",
                price : '33$',
                Image: "./Picture/Burger-3.jpg"
            },
            {
                Name: "Blood Test Tub",
                Type: "female",
                price : '60$',
                Image: "./Picture/Burger-4.jpg"
            },
            {
                Name: "Blood Test Tub",
                Type: "female",
                price : '75$',
                Image: "./Picture/Burger-5.jpg"
            },
            {
                Name: "Blood Test Tub",
                Type: "female",
                price : '39$',
                Image: "./Picture/Burger-6.jpg"
            },
            {
                Name: "Blood Test Tub",
                Type: "female",
                price : '24$',
                Image: "./Picture/Burger-7.jpg"
            },    
        ]
        this.data2 = [
            {
                Name: "Blood Test Tub",
                Type: "Kids",
                price : '16$',
                Image: "./Picture/Picture-1.jpg"
            },
            
            {
                Name: "Blood Test Tub",
                Type: "Kids",
                price : '13$',
                Image: "./Picture/Picture-2.jpg"
            },
            
            {
                Name: "Blood Test Tub",
                Type: "Kids",
                price : '20$',
                Image: "./Picture/Picture-3.jpg"
            },
            
            {
                Name: "Blood Test Tub",
                Type: "Kids",
                price : '25$',
                Image: "./Picture/Picture-4.jpg"
            },
            
            {
                Name: "Blood Test Tub",
                Type: "Kids",
                price : '26$',
                Image: "./Picture/Picture-5.jpg"
            },
            {
                Name: "Blood Test Tub",
                Type: "Kids",
                price : '10$',
                Image: "./Picture/Picture-6.jpg"
            },
            {
                Name: "Blood Test Tub",
                Type: "Kids",
                price : '30$',
                Image: "./Picture/Picture-7.jpg"
            },
            {
                Name: "Blood Test Tub",
                Type: "Kids",
                price : '16$',
                Image: "./Picture/Picture-8.jpg"
            },
            {
                Name: "Blood Test Tub",
                Type: "Kids",
                price : '16$',
                Image: "./Picture/Picture-9.jpg"
            },
            {
                Name: "Blood Test Tub",
                Type: "Kids",
                price : '16$',
                Image: "./Picture/Shoes-1.jpg"
            },
            {
                Name: "Blood Test Tub",
                Type: "Kids",
                price : '16$',
                Image: "./Picture/Shoes-2.jpg"
            },
        ]
    }
}


