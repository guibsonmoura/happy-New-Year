
const documento = document.getElementById('document')
var fogos = []
var particulas = []

class Particulas{
    constructor(){
        console.log('aconteceu aqui')
        const colors = [
            '#fff',
            '#f23',
            '#f19',
        ]
        this.x = 0;
        this.y = 0;
        this.speed = Math.random() * 10 + 3;
        this.angle = Math.random() * Math.PI * 2 ;
        this.vx = Math.cos(this.angle) * this.speed;
        this.vy = -Math.sin(this.angle) * this.speed;
        this.el = document.createElement('div');
        this.el.className = 'particula';
        this.el.style.top = this.y + 'px';
        this.el.style.left = this.x + 'px';
        let numcor = parseInt(Math.random * colors.length)
        let cor = String(colors[numcor])
        this.el.style.backgroundColor = 'white';
        documento.appendChild(this.el)
        
       
        
        setTimeout(()=>{
            this.el.remove();
            particulas.splice(particulas.indexOf(this), 1);
        },800);
    }    
    setPosition(x,y){
            this.x = x;
            this.y = y;
            this.el.style.top = this.y + 'px';
            this.el.style.left = this.x + 'px';
        }
    update(){
            this.setPosition(this.vx + this.x, this.vy + this.y)
            this.vy += 0.05;
        }
}

class Fogos{
    constructor(){
        console.log('aconteceu aqui')
        this.x = window.innerWidth / 2;
        this.y = window.innerHeight - 10;
        this.speed = 8;
        this.angle = (Math.random() * Math.PI / 2) + Math.PI / 4;
        this.vx = Math.cos(this.angle) * this.speed;
        this.vy = -Math.sin(this.angle) * this.speed;
        this.el = document.createElement('div');
        this.el.className = 'fogos';
        this.el.style.top = this.y + 'px';
        this.el.style.left = this.x + 'px';
        documento.appendChild(this.el)
        
        setTimeout(()=>{
            this.el.remove();
            fogos.splice(fogos.indexOf(this), 1);
            this.explode();
        },2500)
    }

    explode(){
        //cria particulas
        for(let i = 0 ; i < 8; i++){
            const particula = new Particulas();
            particula.setPosition(this.x,this.y);
            particulas.push(particula);
        }
        
    }

    update(){
        this.x += this.vx;
        this.y += this.vy;
        this.el.style.top = this.y + 'px';
        this.el.style.left = this.x + 'px';
        this.vy += 0.065;
    }
}


setInterval(()=>{
    fogos.forEach(fogo => fogo.update())
    particulas.forEach(particula => particula.update())
},30)
setInterval(()=>{
    const fogo = new Fogos();
    fogos.push(fogo)
},80)