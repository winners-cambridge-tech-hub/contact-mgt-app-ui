export default {
    methods: {
        async getContacts(page) {
            let pageParam = isNaN(page) ? '' : `page=${page - 1}`;
            let size = localStorage.getItem('page_size');
            let sizeParam = isNaN(size) ? '' : `size=${size}`;
            let result = await this.$axios.get(`${this.appServer}/contacts?${pageParam}&${sizeParam}`);
            if (result.status === 200) {
                if (result.data._embedded) {
                    this.$store.commit('updateContactList', result.data._embedded.contacts);
                    return result;
                }
            } else {
                return {};
            }
        },

        async findContactsById(userId) {
            let result = await this.$axios.get(`${this.appServer}/contacts/${userId}`);
            if (result.status === 200) {
                if (result.data) {
                    this.$store.commit('updateContact', result.data)
                    return result.data;
                } else {
                    return {};
                }
            }
        },

        async saveContact(state) {
            state.birthday_month =  Number(state.birthday_month)
            state.birthday_day =  Number(state.birthday_day)
            alert(state.birthday_month)
            alert(state.birthday_day)
            let result = {};
            let report = "";
            let url = `${this.appServer}/contacts`;

            if (state.id) {
                result = await this.$axios.put(`${url}/${state.id}`, state);
                if (result.status === 200) {
                    this.$store.commit('updateContact', state);
                    report = {success: true, details: "Contact was successfully updated"}
                }
            } else {
                result = await this.$axios.post(url, state);
                if (result.status === 201) {
                    let contacts = this.$store.state.contact_list;
                    contacts.unshift(result.data.post);
                    this.$store.commit('updateContact', result.data.post);
                    this.$store.commit('updateContactList', contacts);
                    report = {success: true, details: "Contact successfully created"}
                }
            }
            return report;
        },

        async deleteContact(userId) {
            let result = await this.$axios.delete(`${this.appServer}/contacts/${userId}`);
            if (result.status === 200) {
                if (result.data) {
                    return result.data;
                } else {
                    return {};
                }
            }
        }
    }
};
