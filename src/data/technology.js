export const TECH_STACK = [
  {
    id: 'flutter',
    icon: 'flutter_dash',
    title: 'Frontend Máquina',
    stack: 'Flutter & Dart',
    text: 'Pantallas optimizadas para uso rudo en escuelas con diseño atractivo para niños con websocket para comunicación en tiempo real del ranking escolar, comunicación con el microservicio de ia y registro de puntos con el con la api .',

  },
  {
    id: 'ia',
    icon: 'psychology',
    title: 'IA',
    stack: 'Python + FastAPI + Groq',
    text: 'Resive las imagenes de la laptop y las clasifica para mandar la respuesta de cuanto puntos se le tiene que dar al alumno y envia la respuesta a la api RestFull de Java que se encarga de registrar los puntos en la base de datos.',
  },
  {
    id: 'backend',
    icon: 'dns',
    title: 'Backend API RestFull',
    stack: 'Java Spring Boot + MySQL',
    text: 'Arquitectura transaccional de alta concurrencia. Valida asignación de puntos anti-fraude, gestiona identidades de alumnos con cifrado AES-256, token JWT, base de datos MySQL y sincroniza tablas de líderes en tiempo real.',
  },
  {
    id: 'iot',
    icon: 'memory',
    title: 'Módulos Físicos IoT',
    stack: 'Arduino Uno & Servos',
    text: 'Arduino Uno se encarga de ejecutar las acciones programadas como la apertura de la tapa del contenedor para la apertura de los compartimentos de los 2 tipos de residuos (plástico y cartón).',
  },
  {
    id: 'aws',
    icon: 'cloud',
    title: 'Infraestructura',
    stack: 'AWS + Docker + UptimeKuma, Doozle',
    text: 'Despliegue de la API RestFull de Java y el microservicio de IA en AWS para asegurar alta disponibilidad y escalabilidad.',
  },
];

export const EXECUTION_STEPS = [
  'Escaneo de material',
  'Clasificación por IA',
  'Apertura de Compuerta',
  'Asignación de Puntos',
];
