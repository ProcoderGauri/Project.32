class Mango
{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution:0.3,
			friction:0.5,
			density:1.2
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);
		this.image=loadImage("Project 28 pics/mango.png");

	}
	display()
	{
			
			var mangopos=this.body.position;		

			push()
			translate(mangopos.x, mangopos.y);
			imageMode(CENTER);
			strokeWeight(3);
			fill(255,0,255)
			image(this.image,0,0,this.r, this.r);
			pop()
			
	}
}