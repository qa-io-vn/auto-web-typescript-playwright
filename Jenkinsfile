pipeline {
   agent any

   tools {nodejs "node"}

   stages {
      stage('Test') {
         steps {
               bat 'npx playwright install'
               bat 'npx playwright install-deps'
               bat 'npm i -D @playwright/test allure-playwright'
               bat 'npx playwright test'
         }
      }
   }
}