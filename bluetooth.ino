#include <SoftwareSerial.h>

SoftwareSerial bt(10,11);
byte data[4]={0,0,0,0};
byte databt[10] = {48,49,50,51,52,53,54,55,56,57};
void setup() {
  Serial.begin(9600);
  bt.begin(9600);
}

void loop() {
  int sensor = analogRead(0);
  
  if (sensor >999)
    sensor = 999;
    
  descomponer(sensor);
  data[1] = databt[data[1]];
  data[2] = databt[data[2]];
  data[3] = databt[data[3]];
  Serial.println(sensor);
  //Serial.println(data[0]);
  Serial.println(data[1]);
  Serial.println(data[2]);
  Serial.println(data[3]);
  
  bt.write("   ");
  bt.write(data[1]);
  bt.write(data[2]);
  bt.write(data[3]);
  
  Serial.println("");
  Serial.println("");
  delay(1000);
  }

void descomponer(int sensor){
  if(0<= sensor <=9){
    data[3]= sensor;
    }
  if(10<= sensor <=99){
    data[2]=sensor/10;
    data[3]=sensor-data[2]*10;
    }
  if(100<= sensor <=999){
    data[1] = sensor/100;
    data[2] = sensor -data[1]*100;
    data[2] = data[2]/10;
    data[3]= (sensor -data[1]*100) -data[2]*10;
    
    }
     
  }
