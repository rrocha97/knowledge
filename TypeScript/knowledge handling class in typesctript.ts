

interface Iclient{
    id:string,
    name:string,
    container:number,
    balance:number
}
interface Iorder{
    type:string;
    id:string;
    price:number;
    status:string;
}
const clientStorage :Iclient[]  = []
const ordersStorage :Iorder[]  = []

class Client{
    client:Iclient
    constructor(client?){
       this.client = client
    }
    saveClient(): void{
        if (!this.findClientbyId(this.client?.id)) {
            clientStorage.push(this.client)
        }
    }
    findClientbyId(id:string): Iclient | undefined {
        return clientStorage.find(client => client.id === id)
    }
    UpdateContainersAndBalance(id,container,balance){
        let client = this.findClientbyId(id)
        if (client) {
            client.container = client.container + container
            client.balance = client.balance + balance
        }
    }
}


class Order {
    order: Iorder;
    constructor(order?) {
        this.order = order
    }
    saveOrder(): void{
        if (this.order) {
            this.order.status = "active"
            ordersStorage.push(this.order)
        }
    }
    findOrderForBuy( budget): Iorder | undefined {
        let orders=  ordersStorage.filter(order => order.type === "sell" && order.price < budget && order.status === "active" )
        orders = orders.sort((a,b)=> a.price-b.price)
        return  orders[0]
    }
    findOrderForSell( budget): Iorder | undefined {
        let orders =  ordersStorage.filter(order => order.type === "buy" && order.price > budget && order.status === "active")
        orders = orders.sort((a,b)=> b.price-a.price)
        return  orders[0]
    }
}



function fullfilpurchase(type,budget){
    const _order = new Order()
    const _client = new Client()
    if (type === "buy") {
        let order = _order.findOrderForBuy(budget)
        if (order) {
            _client.UpdateContainersAndBalance(order.id,1, -order.price)
            order.status = "Inactive"
        }
    } else {
        let order = _order.findOrderForSell(budget)
        if (order) {
            _client.UpdateContainersAndBalance(order.id,-1, order.price)
            order.status = "Inactive"
        }
    }
}



let client = new Client({id:"id1",name:"rafa",balance:0,container:0})
client.saveClient()
console.log(client.findClientbyId("id1"))
new Client({id:"id2",name:"rafa",balance:0,container:0}).saveClient()
new Order({type:"sell",id:"id1",price:200}).saveOrder()
new Order({type:"sell",id:"id1",price:100}).saveOrder()
new Order({type:"sell",id:"id1",price:500}).saveOrder()
new Order({type:"buy",id:"id1",price:200}).saveOrder()
new Order({type:"buy",id:"id1",price:100}).saveOrder()
new Order({type:"buy",id:"id1",price:500}).saveOrder()
console.log(clientStorage);
console.log(ordersStorage);
fullfilpurchase("buy",300)
fullfilpurchase("buy",300)
fullfilpurchase("sell",300)
console.log(ordersStorage);
console.log(clientStorage);





