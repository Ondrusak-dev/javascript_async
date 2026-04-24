class Vendor{
    #itemlist;


    #noitemcallback;


    #itemcallback

    set noitemcallback(value){
        this.#noitemcallback = value
    }
    
    set itemcallback(value){
        this.#itemcallback = value
    }

    constructor(itemlist){
        this.#itemlist = itemlist
    }

    sellsomething(){
        if(this.#itemlist.legth ===0){
            this.#noitemcallback(`Nincs termek`)
        }else{
            this.#itemcallback(this.#itemlist.pop())
        }
    }
    sellsomethingpromise(){
        return new Promise((resolve, reject)=>{
            if(this.#itemlist.legth ===0){
            this.#noitemcallback(`Nincs termek`)
        }else{
            this.#itemcallback(this.#itemlist.pop())
        }
        })
    }
}

class Client{
    #vendor

    constructor(vendor){
        this.#vendor = vendor
        this.#vendor.itemcallback = (element) =>{
            console.log(`A kliens vett egy ${element}`)
        }
        this.#vendor.noitemcallback = (reason) =>{
            console.log(`A kliens vett egy semmit${reason}`)
        }
    }
    buyfromseller(){
        this.#vendor.sellsomething()
    }

    byfromsellerPromisehandling(){
        this.#vendor.sellsomethingpromise()
        .then((element))
    }
}

const vendor = new Vendor(['krumpli'])
const client = new Client(vendor)
client.buyfromseller()