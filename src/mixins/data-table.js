export default {
  data() {
    return {
      dataPagination: {
        totalPages: 0,
        page: 0,
        currentPage: 0,
        report: "",
        pageArr: [],
        pageSizes: [1, 2, 5, 10, 25, 50, 100, 250, 500],
        selectedSize: 10,
      },
    };
  },
  methods: {
    loadScript(url) {
      const body = document.body;
      const script = document.createElement("script");
      script.innerHTML = "";
      script.src = url;
      script.async = false;
      script.defer = true;
      body.appendChild(script);
    },
    mixinDatatableDefaults(pageData) {
      this.dataPagination.totalPages = pageData.totalPages;
      this.dataPagination.totalElements = pageData.totalElements;
      this.dataPagination.page = pageData.number + 1;
      this.dataPagination.currentPage = pageData.number + 1;
      this.dataPagination.report = this.pageReport(pageData);

      let beginIndex = Math.max(1, this.dataPagination.page - 4);
      let endIndex = Math.min(beginIndex + 3, this.dataPagination.totalPages);

      this.dataPagination.pageArr = new Array(endIndex - beginIndex)
        .fill()
        .map((d, i) => i + beginIndex);
      this.dataPagination.selectedSize = this.getSelectedPageSize();

      return this.dataPagination;
    },
    pageReport(pageData) {
      let page = pageData.number + 1;
      let size = this.getSelectedPageSize();
      let from = pageData.number * size + 1;
      let to = page * size;
      if (page === pageData.totalPages) {
        to = pageData.totalElements;
      }
      return `${from} to ${to} of ${pageData.totalElements} rows`;
    },
    getSelectedPageSize() {
      let selectedSize = localStorage.getItem("page_size");
      let pageSize = selectedSize == null ? 10 : selectedSize;
      localStorage.setItem("page_size", pageSize);
      return parseInt(pageSize);
    },
    mixinDatatableActivateClickedRow(row) {
      let elem = document.getElementById(`row-${row}`);
      let siblings = elem.parentElement.children;
      for (let sib of siblings) {
        sib.classList.remove("selected-row");
      }
      elem.classList.add("selected-row");
    },
  },
  mounted(){
    document.body.classList.toggle("toggle-sidebar");
  }
};
