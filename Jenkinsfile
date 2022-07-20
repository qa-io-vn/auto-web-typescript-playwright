pipeline {
   agent any

   tools {nodejs "node"}

   stages {
      stage('Test') {
         steps {
               sh 'sudo apt-get install'
               sh 'apt-get install -y gstreamer1.0-libav libnss3-tools libatk-bridge2.0-0 libcups2-dev libxkbcommon-x11-0 libxcomposite-dev libxrandr2 libgbm-dev libgtk-3-0'
               sh 'npx playwright install'
               sh 'npm i -D @playwright/test allure-playwright'
               sh 'npx playwright test'
         }
      }
   }
}