import { createStore } from 'vuex'

export default createStore({
    state: {
        selected_contact: { },
        contact_list: [],
        page: []
    },
    mutations: {
        updateContactList(state, contacts){
            state.contact_list = contacts;
        },
        updateContact(state, contact){
            state.selected_contact.first_name = contact.first_name;
            state.selected_contact.middle_name = contact.middle_name;
            state.selected_contact.last_name = contact.last_name;
            state.selected_contact.email = contact.email;
            state.selected_contact.phone_number = contact.phone_number;
            state.selected_contact.contact_address = contact.contact_address;
            state.selected_contact.marital_status = contact.marital_status;
            state.selected_contact.town_city = contact.town_city;
            state.selected_contact.county = contact.county;
            state.selected_contact.post_code = contact.post_code;
            state.selected_contact.birthday_month = contact.birthday_month;
            state.selected_contact.birthday_day = contact.birthday_day;
            state.selected_contact.gender = contact.gender;
            state.selected_contact.service_unit = contact.service_unit;
            state.selected_contact.first_attendance = contact.first_attendance;
            state.selected_contact.bfc_status = contact.bfc_status;
            state.selected_contact.water_baptism = contact.water_baptism;
            state.selected_contact.service_unit = contact.service_unit;
            state.selected_contact.wofbi_status = contact.wofbi_status;
            state.selected_contact.id = contact?.id;
        },
        updatePage(state, page){
            state.page = page;
        },
    },
    actions: {
        // context.commit('updateContactList', result.data._embedded.contacts)
    },
    getters: {
    }
})
