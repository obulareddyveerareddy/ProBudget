import { connect }      from 'react-redux'
import AccountsPage         from './AccountsPage'

const mapStateToProps = (state, ownProps) => {
    console.log('~~~~~~~~~~~~~~~~~~~ >>> AccountsLink <---> mapStateToProps <<< ~~~~~~~~~~~~~~~~~~~', state);
    return {
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
}

const AccountsLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountsPage)

export default AccountsLink