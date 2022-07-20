pipeline {
   agent any

   tools {nodejs "node"}

   stages {
      stage('Test') {
         steps {
               sh 'npx playwright install'
               sh 'npm i -D @playwright/test allure-playwright'
               sh 'npx playwright test'
         }
      }
   }
}