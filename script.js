var stime = new Date().getTime();
			var min=10000000;
			
			function reappear(){
				stime = new Date().getTime();
				document.getElementById("shape").style.backgroundColor = hexcode();
				var x = Math.random()*200 + 100;
				document.getElementById("shape").style.width = x + "px";
				document.getElementById("shape").style.height = x + "px";
				document.getElementById("shape").style.top = Math.random()*350 + "px";
				document.getElementById("shape").style.left = Math.random()*1200 + "px";
				var r = Math.floor(Math.random()*2);
				if (r==0){
					document.getElementById("shape").style.borderRadius = "50%";
					console.log(r);
				}
				else {
					document.getElementById("shape").style.borderRadius = "0%"
					console.log(r);
				}
				document.getElementById("shape").style.display = "block";
			}
			
			setTimeout(reappear,2000);
			
			document.getElementById("shape").onclick = function() {
				document.getElementById("shape").style.display = "none";
				var etime = new Date().getTime();
				var timeTaken = (etime-stime)/1000;
				if (timeTaken<min){
					min = timeTaken;
					document.getElementById("bestTime").innerHTML = min+"s";
				}
				console.log("timeTaken = "+timeTaken+"    bestTime="+min);
				document.getElementById("timeTaken").innerHTML = timeTaken+"s";
				setTimeout(reappear, Math.random()*1000);
			}
			
			function hexcode(){
				var s,c1,c2,c3,c4,c5,c6;
				c1 = hexadec(Math.floor(Math.random()*16));
				c2 = hexadec(Math.floor(Math.random()*16));
				c3 = hexadec(Math.floor(Math.random()*16));
				c4 = hexadec(Math.floor(Math.random()*16));
				c5 = hexadec(Math.floor(Math.random()*16));
				c6 = hexadec(Math.floor(Math.random()*16));
				s = "#"+c1+c2+c3+c4+c5+c6;
				console.log(s);
				return s;
			}
			
			function hexadec(a){
				if(a<10)
					return a;
				else if(a==10)
					return 'A';
				else if(a==11)
					return 'B';
				else if(a==12)
					return 'C';
				else if(a==13)
					return 'D';
				else if(a==14)
					return 'E';
				else if(a==15)
					return 'F';
			}