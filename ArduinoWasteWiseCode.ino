/*
/* Grove - Temperature Sensor demo v1.0
*  This sensor detects the environment temperature,
*  Connect the signal of this sensor to A0, use the 
*  Serial monitor to get the result.
*  By: http://www.seeedstudio.com
*/
#include <math.h>;
int a;
int moistureVal;
int compostPin = A3;
float temperature;
int B=3975;         // value of the thermistor
float resistance;

// temp and moisture thresholds
const float HotThreshhold = 80.0; // Fahrenheit top threshold for compost
const float ColdThreshold = 40.0; // Fahrenheit lowest threshold for compost
const int WetThreshold = 400; // Highest livable threshold for moisture in compost
const int DryThreshold = 50; // Lowest livable threshold for moisture in compost
 
void setup()
{
  Serial.begin(9600);  
}
 
void loop()
{

  // get soil moisture value from the function below and print it
  readMoisture();

  // get temperature value from Grove pins
  a=analogRead(0);

  resistance=(float)(1023-a)*10000/a; //get the resistance of the sensor;
  temperature=1/(log(resistance/10000)/B+1/298.15)-273.15;//convert to temperature via datasheet&nbsp;;
  temperature = (temperature*1.8)+32;

  Serial.print(moistureVal);
  Serial.print(",");
  Serial.print(temperature);
  Serial.print(",");
  Serial.print(temperature >= HotThreshhold ? "1" : "0"); // Hot flag
  Serial.print(",");
  Serial.print(temperature <= ColdThreshold ? "1" : "0"); // Cold flag
  Serial.print(",");
  Serial.print(moistureVal >= WetThreshold ? "1" : "0"); // Wet flag
  Serial.print(",");
  Serial.println(moistureVal <= DryThreshold ? "1" : "0"); // Dry flag

  delay(1000);

 }

 void readMoisture(){
  moistureVal = analogRead(compostPin);
 }
