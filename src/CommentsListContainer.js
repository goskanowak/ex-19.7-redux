import {connect} from 'react-redux'; 
// laczy komponenty do store (nie modyfikuje go tylko, oddaje nowy z nowymi funkcjonalnościami )
import CommentsList from './CommentsList';


const mapStateToProps = state => ({
  comments: state.comments
}); 
//mapuje po stanach propsów, które przekazujemy,  

export default connect(mapStateToProps)(CommentsList);
//na wejściu przyjmuje stan aplikacji, na wyjściu oddaje obiekt z watościami propsów do komponentu CommentList 