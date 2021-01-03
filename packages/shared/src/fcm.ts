import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'

admin.initializeApp()

const db = admin.firestore()
const { logger } = functions
const message = admin.messaging()

export { functions, logger, db, message }
