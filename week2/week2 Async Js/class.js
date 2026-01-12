class Rectagle{
    constructor(width,height,color)
    {

        this.width= width;
        this.height=height;
        this.color=color;

    }

     area() 
    {
        const area=this.width*this.height;
        console.log(this);
        return area;

    }

    paint() 
    {
        console.log(`painting with color  ${this.color}`);

     }

}

   


 const rect=new Rectagle(2,3,"red");
 const area=rect.area();
 console.log(area);
