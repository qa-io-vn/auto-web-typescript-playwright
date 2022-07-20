// pipeline {
//    agent { docker { image 'mcr.microsoft.com/playwright:v1.23.1-focal' } }
//    stages {
//       stage('e2e-tests') {
//          steps {
//             sh 'npm install'
//             sh 'npx playwright test'
//          }
//       }
//    }
// }

pipeline {
    agent any

   tools {nodejs "node"}

   environment {
      CHROME_BIN = '/bin/google-chrome'
   }

    stages {
        stage('Build') {
            steps {
               echo 'Building..'
            }
        }
        stage('Test') {
            steps {
               echo 'Testing..'
                  sh 'npm install'
                  sh 'npx playwright test'
            }
        }
        stage('Deploy') {
            steps {
               echo 'Deploying....'
            }
        }
    }
}