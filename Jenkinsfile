pipeline {
   agent any

   tools {nodejs "node"}

   stages {
      stage('Test') {
         steps {
               sh 'npm install'
               sh 'npm i -D @playwright/test allure-playwright'
               sh 'npx playwright test'
         }
      }
   }
}