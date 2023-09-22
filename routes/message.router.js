const express = require('express')
const router = express.Router()
const messageController = require('../controller/message.controler')
const authMidleWare = require('../middleWare/auth.middlewere')

router.get(
    '/get-loadmore',
    // ?limit=$limit&skip=$skip
    // authMidleWare.apiAuth,
    messageController.loadMoreMessages
)

router.get(
    '/get-filter-message',
    // authMidleWare.apiAuth,
    messageController.filterMessagesbyCode
)

router.get(
    '/get-list-message',
    authMidleWare.apiAuth,
    messageController.getListMessage
)

router.get(
    '/get-message/:id',
    authMidleWare.apiAuth,
    messageController.getMessageById
)
router.post(
    '/create-message',
    authMidleWare.apiAuth,
    messageController.createMessage
)

router.put(
    '/update-message/:id',
    authMidleWare.apiAuth,
    messageController.updateMessage
)

router.delete(
    '/delete-message/:id',
    authMidleWare.apiAuth,
    messageController.deleteMessage
)

module.exports = router
