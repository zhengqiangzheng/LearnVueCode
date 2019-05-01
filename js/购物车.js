var app = new Vue({
    el: '#app',
    data: {
        list: [{
            id: 1,
            name: 'iphone 7',
            price: 6188,
            count: 1
        },
            {
                id: 2,
                name: 'ipad pro',
                price: 5888,
                count: 1
            },
            {
                id: 3,
                name: 'MacBook Pro',
                price: 21488,
                count: 1

            }

        ]
    },
    computed: {
        totalPrice: function () {
            let total = 0;
            for (let i = 0; i < this.list.length; i++) {
                total += this.list[i].count * this.list[i].price;

            }
            return total.toString().replace(/\B(?=(\d{3})+$)/g, ',');
            // return total

        }

    },
    methods: {

        handleReduce:function (index) {
            this.list[index].count--
        },
        handleIncrease:function (index) {
            this.list[index].count++;
        },
        handleRemove:function (index) {
            this.list.splice(index, 1);  //会改变原数组
        }
    }


})