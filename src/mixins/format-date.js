import moment from "moment";

export default {
  methods: {
    dateFormat (date) {
      return moment(date).format("YYYY-MM-DD");
    },
    timeFormat (time) {
      return moment(time).format("HH:mm");
    },
  }
}