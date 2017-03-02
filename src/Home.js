import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import {List, ListItem} from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import {Card, CardTitle, CardText} from 'material-ui/Card'
import LinearProgress from 'material-ui/LinearProgress';
import TextField from 'material-ui/TextField';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin()

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      marca: '',
      modelo: '',
      color: '',
      problema: '',
    }
  }

  selectValue(fieldName, value) {
    this.setState({
      [fieldName]: value
    })
  }

  render() {
    const {
      actions,
      marca,
      modelo,
      color,
      problema
    } = this.state
    console.log('bp')

    let progress = 0
    let breadcrumbs = []
    let content = <div>
      <Subheader>Elije tu marca</Subheader>
      <List>
        <ListItem primaryText="Iphone" onTouchTap={() => {this.selectValue('marca', 'IOS')}}/>
        <ListItem primaryText="Samsung" onTouchTap={() => this.selectValue('marca', 'Android')}/>
      </List>
    </div>

    if (problema) {
      progress = 100
      content = <div>
        <Subheader>Te llamaremos</Subheader>
        <TextField
          floatingLabelText="Tu correo"
        />
        <RaisedButton label="Enviar!"/>
      </div>
      breadcrumbs.push(<li><a href="#">{problema}</a></li>)
    } else if (color) {
      progress = 75
      content = <div>
        <Subheader>Problema?</Subheader>
        <List>
          <ListItem primaryText="Pantalla" onTouchTap={() => this.selectValue('problema', 'Pantalla')}/>
          <ListItem primaryText="Agua" onTouchTap={() => this.selectValue('problema', 'Agua')}/>
          <ListItem primaryText="Muerte" onTouchTap={() => this.selectValue('problema', 'Muerte')}/>
        </List>
      </div>
      breadcrumbs.push(<li><a href="#">{color}</a></li>)
    } else if (modelo) {
      progress = 50
      content = <div>
        <Subheader>Que color?</Subheader>
        <List>
          <ListItem primaryText="Azul" onTouchTap={() => this.selectValue('color', 'Azul')}/>
          <ListItem primaryText="Amarillo" onTouchTap={() => this.selectValue('color', 'Amarillo')}/>
          <ListItem primaryText="Verde" onTouchTap={() => this.selectValue('color', 'Verde')}/>
        </List>
      </div>
      breadcrumbs.push(<li><a href="#">{modelo}</a></li>)
    } else if (marca) {
      progress = 25
      content = <div>
        <Subheader>Que modelo es tu telefono?</Subheader>
        <List>
          <ListItem primaryText="5" onTouchTap={() => this.selectValue('modelo', '5')}/>
          <ListItem primaryText="6s" onTouchTap={() => this.selectValue('modelo', '6s')}/>
          <ListItem primaryText="7" onTouchTap={() => this.selectValue('modelo', '7')}/>
        </List>
      </div>
      breadcrumbs.push(<li><a href="#">{marca}</a></li>)
    }

    return <div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <ol className="breadcrumb">
              {breadcrumbs}
            </ol>
            <LinearProgress mode="determinate" value={progress} />
            {content}
          </div>
        </div>
      </div>
    </div>
  }
}
