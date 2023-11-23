#include <DHT.h>
#include <PubSubClient.h>
#include <WiFi.h>

#define DHTPIN 2   // Pino de conexão do sensor de temperatura e umidade (DHT22)
#define PIRPIN 4   // Pino de conexão do sensor de presença (PIR)

// Use DHT22 no lugar de DHT11
DHT dht(DHTPIN, DHT22);

const char *ssid = "Wokwi-GUEST";
const char *password = "";
const char *mqtt_server = "broker.hivemq.com";
const int mqtt_port = 1883;
const char *mqtt_user = "";
const char *mqtt_password = "";

WiFiClient espClient;
PubSubClient client(espClient);

void setup() {
  Serial.begin(9600);
  pinMode(PIRPIN, INPUT);

  setup_wifi();
  client.setServer(mqtt_server, mqtt_port);

  Serial.println("ProntuCare: Tecnologia e Saúde");
  delay(2000);
}

void loop() {
  float temperature = dht.readTemperature();
  int presence = digitalRead(PIRPIN);

  // Envie os dados para o monitor serial
  Serial.print("Temperatura: ");
  Serial.print(temperature);
  Serial.print("%, Presença: ");
  Serial.println(presence);

  // Lógica de detecção de padrões e ativação de alertas
  if (presence == HIGH) {
    // Adicione lógica para verificar alta movimentação (fictício, ajuste conforme necessário)
    if (movimento()) {
      publishData("ProntuCare/movimento", "Paciente se mexeu");
    }
  }

  publishData("ProntuCare/temperatura", String(temperature));
  publishData("ProntuCare/movimento", String(presence));

  delay(5000);  // Aguarde 5 segundos antes de ler os sensores novamente
}

// Função fictícia para verificar alta movimentação
bool movimento() {
  return true;  // Neste exemplo, sempre retorna true (simulando alta movimentação)
}

void setup_wifi() {
  delay(10);
  Serial.println();
  Serial.print("Conectando a ");
  Serial.println(ssid);

  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("");
  Serial.println("Conectado à rede WiFi");
}

void publishData(const char *topic, String payload) {
  if (!client.connected()) {
    reconnect();
  }

  String fullTopic = "" + String(topic);
  Serial.print("Publicando em: ");
  Serial.println(fullTopic.c_str());
  Serial.print("Payload: ");
  Serial.println(payload.c_str());

  client.publish(fullTopic.c_str(), payload.c_str());
}

void reconnect() {
  while (!client.connected()) {
    Serial.print("Tentando se conectar ao MQTT...");
    if (client.connect("ESP32Client", mqtt_user, mqtt_password)) {
      Serial.println("Conectado");
    } else {
      Serial.print("Falha, rc=");
      Serial.print(client.state());
      Serial.println(" Tentando novamente em 5 segundos");
      delay(5000);
    }
  }
}
