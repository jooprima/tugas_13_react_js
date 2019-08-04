import React, {Component} from "react";
import "semantic-ui-css/semantic.min.css";
import {
  Segment,
  Grid,
  Divider,
  Header,
  Icon,
  Button,
  Search,
  Dimmer,
  Loader,
  Image,
  Placeholder,
  List,
  Table,
  Label,
  Menu
} from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <div>
        <br />
        <br />

        <Segment placeholder>
          <Grid columns={2} stackable textAlign="center">
            <Divider vertical>Or</Divider>

            <Grid.Row verticalAlign="middle">
              <Grid.Column>
                <Header icon>
                  <Icon name="search" />
                  Cari Document
                </Header>

                <Search placeholder="Search..." />
              </Grid.Column>

              <Grid.Column>
                <Header icon>
                  <Icon name="pdf file outline" />
                  Tambah Document Baru
                </Header>

                <Button primary>Create Document</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment>
          <Dimmer active>
            <Loader>Loading</Loader>
          </Dimmer>

          <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
        </Segment>

        <Grid columns={3}>
          <Grid.Column width={5}>
            <Segment raised>
              <Placeholder>
                <Placeholder.Header image>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Header>
                <Placeholder.Paragraph>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Paragraph>
              </Placeholder>
            </Segment>
          </Grid.Column>

          <Grid.Column width={7}>
            <Segment raised>
              <Placeholder>
                <Placeholder.Header image>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Header>
                <Placeholder.Paragraph>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Paragraph>
              </Placeholder>
            </Segment>
          </Grid.Column>

          <Grid.Column width={2}>
            <Header as="h3">
              Website Terkait
              <List>
                <List.Item>
                  <List.Icon name="linkify" />
                  <List.Content>
                    <a href="/">
                      <h4>Google</h4>
                    </a>
                  </List.Content>
                </List.Item>

                <List.Item>
                  <List.Icon name="linkify" />
                  <List.Content>
                    <a href="/">
                      <h4>Facebook</h4>
                    </a>
                  </List.Content>
                </List.Item>

                <List.Item>
                  <List.Icon name="linkify" />
                  <List.Content>
                    <a href="/">
                      <h4>Semantic UI</h4>
                    </a>
                  </List.Content>
                </List.Item>

                <List.Item>
                  <List.Icon name="linkify" />
                  <List.Content>
                    <a href="/">
                      <h4>Niomic</h4>
                    </a>
                  </List.Content>
                </List.Item>

                <List.Item>
                  <List.Icon name="linkify" />
                  <List.Content>
                    <a href="/">
                      <h4>React</h4>
                    </a>
                  </List.Content>
                </List.Item>
              </List>
            </Header>
          </Grid.Column>
        </Grid>

        <Grid textAlign="center">
          <Grid.Column style={{maxWidth: 1000}}>
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell colspan="3" textAlign="right">
                    <Search placeholder="search" />
                  </Table.HeaderCell>
                </Table.Row>

                <Table.Row>
                  <Table.HeaderCell colspan="2" textAlign="center">
                    Nama Document
                  </Table.HeaderCell>
                  <Table.HeaderCell textAlign="center">
                    Jenis File
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.Cell colspan="2">
                    <Label ribbon>Panduan Belajar Javascript</Label>
                  </Table.Cell>
                  <Table.Cell textAlign="center">PDF</Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell colspan="2">Panduan Belajar CSS</Table.Cell>
                  <Table.Cell textAlign="center">PDF</Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell colspan="2">Panduan Belajar ReactJS</Table.Cell>
                  <Table.Cell textAlign="center">PDF</Table.Cell>
                </Table.Row>
              </Table.Body>

              <Table.Footer>
                <Table.Row>
                  <Table.HeaderCell colspan="3">
                    <Menu floated="right" pagination>
                      <Menu.Item as="a" icon>
                        <Icon name="chevron left" />
                      </Menu.Item>
                      <Menu.Item as="a">1</Menu.Item>
                      <Menu.Item as="a">2</Menu.Item>
                      <Menu.Item as="a">3</Menu.Item>
                      <Menu.Item as="a">4</Menu.Item>
                      <Menu.Item as="a" icon>
                        <Icon name="chevron right" />
                      </Menu.Item>
                    </Menu>
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Footer>
            </Table>
          </Grid.Column>
        </Grid>

        <br />
        <br />
      </div>
    );
  }
}

export default App;
