import {connect} from 'react-redux';
import Footer from './footer';

const msp = state => (
    {session: state.session}
)

export default connect(msp, null)(Footer)