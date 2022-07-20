pipeline {
   agent any


   stages {
      stage('Test') {
         steps {
               sh 'npm install'
               sh 'npx playwright test'
         }
      }
   }
}