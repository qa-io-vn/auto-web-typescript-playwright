pipeline {
   agent any

   tools {nodejs "node"}

   stages {
      stage('Test') {
         steps {
               bat 'npx playwright install'
               bat 'npx playwright install-deps'
               bat 'npm i -D @playwright/test allure-playwright'
               catchError {
                   bat 'npx playwright test --reporter=line,allure-playwright'
               }       
         }
      }

      stage('reports') {
         steps {
            script {
               allure([
                        includeProperties: false,
                        jdk: '',
                        properties: [],
                        reportBuildPolicy: 'ALWAYS',
                        results: [[path: 'allure-results']]
                ])
            }
         }
      }
   }
}
