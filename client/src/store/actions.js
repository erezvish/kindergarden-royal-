import kidService from '../services/kid.service.js'
import userService from '../services/user.service.js'

export default {

    createKid({ commit }, payload) {
        kidService.create(payload.kid)
            .then(res => {
                payload.kid = res.data
                commit(payload)
            })
            .catch(err => {
                console.error('server cannot create kid ', payload.kid.firstName, payload.kid.lastName, err)
            })
    },

    getKids({ commit }, payload) {
        kidService.getList()
            .then(res => {
                payload.kids = res.data
                commit(payload)
            })
            .catch(err => {
                console.error('cannot get kids from server', err)
            })
    },

    updateKid({ commit }, payload) {
        kidService.update(payload.kid)
            .then(res => {
                payload.kid = res.data
                commit(payload)
            })
            .catch(err => {
                console.error('cannot update kid on server', kid.firstName, kid.lastName, err)
            })
    },

    deleteKid({ commit }, payload) {
        kidService.delete(payload._id)
            .then(() => commit(payload))
            .catch(err => {
                console.error('cannot delete kid on server', kid.firstName, kid.lastName, err)
            })
    },

    toggleIsPresent() {

    },

    login({ commit }, payload) {
        userService.login(payload.user)
            .then(res => {
                console.log('login success', res.data)
                payload.token = res.data.token
                commit(payload)
            })
            .catch(res => console.log(res.data))
    }
}