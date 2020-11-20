class tv{
    constructor(Brand,Price,inches,ONOFFstatus,Channel=1,volume=50,maxChannels= 50){

        this.Brand = Brand;
        this.Channel = Channel;
        this.Price = Price;
        this.inches = inches;
        this.ONOFFstatus = ONOFFstatus;
        this.volume = volume;
        this.maxChannels=maxChannels;
    }
    get status(){
        return '"'+this.Brand+' '+'at channel :'+this.channel+' volume :'+this.volume+'"';
    
    }
    set Volume(setvalue){
        if(0<setvalue && setvalue<100){
            this.volume= setvalue;
        }
        }
        set Channel (setvalue){
            if(setvalue<this.maxChannels){
                this.channel= setvalue;
        
            }
        }
        reset (setvalue1=1, setvalue2=50){
            this.volume=setvalue2;
            this.channel= setvalue1;
        
            
            }
        
        }
        let parasonic = new tv ('parasonic', 40000, 36, 'On');
        console.log(parasonic.status)
        parasonic.Volume=50;
        parasonic.Channel=10;
        console.log(parasonic);
        console.log(parasonic.status);
        parasonic.reset();
        parasonic.Volume=125;
        console.log(parasonic);
        console.log(parasonic.status)
        
        
        class LED extends tv{
            constructor(Brand,screenThickness, energyUsage, lifeSpan, refreshRate, ViewingAngle,backlight= 'NA', displayDetails,){
                super(Brand);
                this.screenThickness= screenThickness;
                this.energyUsage= energyUsage;
                this.lifeSpan=lifeSpan;
                this.refreshRate= refreshRate;
                this.ViewingAngle= ViewingAngle;
                this.backlight=backlight;
                this.displayDetails= displayDetails;
            }
        }
        
        class Plasma extends LED{
            constructor(){
                super();
            }
        }
        
        let samsung= new Plasma('samsung');
        console.log(samsung);