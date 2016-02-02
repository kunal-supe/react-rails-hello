class Linkclicked extends React.Component {

  constructor(props) {
    super(props);

  }

  render () {
    return (
      <ButtonGroup>
        <Button>1</Button>
        <Button>2</Button>
        <DropdownButton title="Dropdown" id="bg-nested-dropdown">
          <MenuItem eventKey="1">Dropdown link</MenuItem>
          <MenuItem eventKey="2">Dropdown link</MenuItem>
        </DropdownButton>
    </ButtonGroup>
    );
  }
}
