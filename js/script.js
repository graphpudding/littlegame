var variable=false;
var counter=0;
var counterWins=0;

var app= new Vue({	
	el:'#app',
	data:{
		col:9,
		squares:[],
		message:"",
		circleCounter:0,
		crossCounter:0,
		circleCounterWins:0,
		crossCounterWins:0
	},
	mounted(){

		for(var i=0; i<this.col; i++){
			this.squares.push({
					number:i,
					circle:false,
					cross:false,
					logic:false
				})
		}
	},
	methods:{
			painting: function (e,y) {
				if (!this.squares[e].logic) {
					if (variable){
						this.squares[e].circle=true;
						this.squares[e].logic=true;
						this.circleCounter++;
					}
					else{
						this.squares[e].cross=true;			
						this.squares[e].logic=true;	
						this.crossCounter++
						}
					variable=!variable;
					counter++
					}

					if (
						this.squares[0].cross && this.squares[1].cross && this.squares[2].cross||
						this.squares[0].cross && this.squares[3].cross && this.squares[6].cross||
						this.squares[6].cross && this.squares[7].cross && this.squares[8].cross||
						this.squares[2].cross && this.squares[5].cross && this.squares[8].cross||
						this.squares[1].cross && this.squares[4].cross && this.squares[7].cross||
						this.squares[0].cross && this.squares[4].cross && this.squares[8].cross||
						this.squares[2].cross && this.squares[4].cross && this.squares[6].cross||
						this.squares[3].cross && this.squares[4].cross && this.squares[5].cross
					) 
					{
						this.message="CROSS WINS!"
						if(this.crossCounterWins+this.circleCounterWins==counterWins)
						{
							this.crossCounterWins++
						}
						for(var i=0; i<this.col; i++){
							this.squares[i].logic=true;
						}
					}
					if (
						this.squares[0].circle && this.squares[1].circle && this.squares[2].circle||
						this.squares[0].circle && this.squares[3].circle && this.squares[6].circle||
						this.squares[6].circle && this.squares[7].circle && this.squares[8].circle||
						this.squares[2].circle && this.squares[5].circle && this.squares[8].circle||
						this.squares[1].circle && this.squares[4].circle && this.squares[7].circle||
						this.squares[0].circle && this.squares[4].circle && this.squares[8].circle||
						this.squares[2].circle && this.squares[4].circle && this.squares[6].circle||
						this.squares[3].circle && this.squares[4].circle && this.squares[5].circle
						) 
					{
						this.message="CIRCLE WINS!"
						if(this.crossCounterWins+this.circleCounterWins==counterWins)
						{
							this.circleCounterWins++
						}
						for(var i=0; i<this.col; i++){
							this.squares[i].logic=true;
							}
					}
					if (counter==9&&this.message==""){
					this.message="GAME OVER";
					}
			
			},
			newGame:function () {
				if (this.message!=""&&this.message!="GAME OVER") {
				 counterWins++}
				for(var i=0; i<this.col; i++){
					this.squares[i].logic=false;
					this.squares[i].cross=false;
					this.squares[i].circle=false;
				}
				 this.message="";
				 this.circleCounter=0;			 
				 this.crossCounter=0;
				 counter=0;
				 variable=false;
			
		}

	}
})

