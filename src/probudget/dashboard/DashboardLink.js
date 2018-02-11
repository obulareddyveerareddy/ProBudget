import { connect }      from 'react-redux'
import DashboardPage         from './DashboardPage'

const mapStateToProps = (state, ownProps) => {
    console.log('~~~~~~~~~~~~~~~~~~~ >>> DashboardLink <---> mapStateToProps <<< ~~~~~~~~~~~~~~~~~~~', state);
    return {
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
}

const DashboardLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardPage)

export default DashboardLink