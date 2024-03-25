pipeline {
   agent any

   tools {nodejs "node"}

   stages {
      stage('Test') {
         steps {
               bat 'npm install'
               catchError {
                   bat 'npm run ui'
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
