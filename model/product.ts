export default class Product {
    constructor(pid:any,prdname:string,description:string,cost:any){
        this.prdname = prdname;
        this.pid = pid;
        this.description=description;
        this.cost=cost;
    }
    pid:any=0;
    prdname:string="";
    description:string="";
    cost:any="";

}
