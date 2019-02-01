export const SEARCH = "SEARCH";


export const searchPromotions = () => {
    return {
        type: SEARCH
    }
}



//   searchBtnClick = event => {
//     event.preventDefault();
//     this.searchPromotions();
//   }


//   searchPromotions = () => {
//     // const searchInput = this.state.searchTerm;
//     // const promotionArray = Object.keys(this.props.promotionData).map(key => this.props.promotionData[key]);
//     // const filteredPromotionArray = promotionArray.filter((el) => el.name.toLowerCase().indexOf(searchInput.toLowerCase()) > -1);
//     // this.setState({searchDisplay: filteredPromotionArray.sort((a,b) => b.lastUpdatedTime - a.lastUpdatedTime) });
//   }