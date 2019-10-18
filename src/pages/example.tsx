import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { Background } from '../components/background';
import { Bar } from '../components/bar';
import { PriceBox } from '../components/price-box';
import { SEO } from '../components/seo';
import { DefaultLayout } from '../layouts/default-layout';

const ExamplePage = () => (
  <DefaultLayout>
    <SEO title="Home" />

    <Background image="applyingLipGloss">
      <section id="first-section" className="text-light">
        <Container>
          <p className="hat">QC Presents</p>
          <h1 className="text-light">QC Career School</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ipsum eros, lacinia sed dapibus sed, accumsan ut diam. In commodo, nisi eu ullamcorper pretium, eros felis fringilla nunc, quis laoreet urna lectus ut elit. Duis non fringilla justo. Sed quis mauris vitae massa ornare rhoncus sed eu risus. In hac habitasse platea dictumst. In nisl enim, maximus vel felis vitae, dictum efficitur ipsum. In malesuada, lacus malesuada mattis semper, tellus erat ultrices purus, gravida egestas mauris mi eget turpis. Mauris sem orci, porttitor ac nisi sit amet, varius consectetur purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean nec justo ut eros convallis ornare. Ut tincidunt arcu et congue mattis. Quisque vitae consectetur libero. Sed ac sem gravida, condimentum orci eget, efficitur turpis.</p>
          <p>Suspendisse potenti. Praesent bibendum pretium neque, quis imperdiet erat hendrerit vitae. Donec maximus ipsum et urna fermentum, nec vulputate odio gravida. Nunc commodo pulvinar ex. Ut non egestas odio. Suspendisse eget elit sollicitudin, pharetra sapien id, mattis velit. In pharetra convallis nibh a mattis. In egestas nunc non libero luctus, in porta erat gravida. Donec ut sodales dui, ut ornare ipsum. Phasellus pretium, urna ac fermentum rhoncus, ante nulla semper orci, eu pulvinar turpis metus rhoncus enim.</p>
          <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi ut dignissim ligula, a rutrum orci. Suspendisse maximus faucibus luctus. Duis commodo condimentum viverra. Duis et odio mollis, eleifend odio at, lacinia massa. Nam ultrices malesuada lacus ut porttitor. Nam mattis pharetra cursus. Vestibulum imperdiet efficitur dolor sed eleifend. Quisque sodales purus nunc. Donec dignissim pretium interdum. Proin a porta quam, vitae dignissim justo. Morbi et hendrerit erat, luctus elementum erat. Aenean dignissim est eu lorem accumsan, vel commodo justo lobortis. Ut risus quam, finibus quis nibh eu, maximus sodales sapien. Aliquam semper leo ut turpis tristique sodales.</p>
          <Button size="sm">sdsds</Button>
        </Container>
      </section>
    </Background>

    <section>
      <Container>
        <h1>This is an H1</h1>
        <h2>This is an H2</h2>
        <h3>This is an H3</h3>
        <h4>This is an H4</h4>
        <h5>This is an H5</h5>
        <h6>Don't Use an H6</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ipsum eros, lacinia sed dapibus sed, accumsan ut diam. In commodo, nisi eu ullamcorper pretium, eros felis fringilla nunc, quis laoreet urna lectus ut elit. Duis non fringilla justo. Sed quis mauris vitae massa ornare rhoncus sed eu risus. In hac habitasse platea dictumst. In nisl enim, maximus vel felis vitae, dictum efficitur ipsum. In malesuada, lacus malesuada mattis semper, tellus erat ultrices purus, gravida egestas mauris mi eget turpis. Mauris sem orci, porttitor ac nisi sit amet, varius consectetur purus.</p>
        <p className="lead">This is a lead paragraph</p>
        <Button>Normal Button</Button>
        <br />
        <br />
        <Button size="lg">Large Button</Button>
        <br />
        <br />
        <Button size="sm">Small Button</Button>
        <br />
        <br />

        <Row>
          <Col xs="12" md="6">
            <Card>
              <Card.Body>
                <Card.Title>Master Makeup Artistry</Card.Title>
                <PriceBox courses={[ 'mz' ]} />
              </Card.Body>
            </Card>
          </Col>
          <Col xs="12" md="6">
            <Card>
              <Card.Body>
                <Card.Title>Interior Decorating</Card.Title>
                <PriceBox courses={[ 'i2' ]} />
              </Card.Body>
            </Card>
          </Col>
        </Row>

      </Container>
    </section>

    <section className="text-light bg-gray">
      <Container>
        <h2>Light on Gray</h2>
        <p className="lead"><strong>Lorem ipsum</strong> dolor sit amet</p>
        <p>Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit</strong>. Nam ipsum eros, lacinia sed dapibus sed, accumsan ut diam. In commodo, nisi eu ullamcorper pretium, eros felis fringilla nunc, quis laoreet urna lectus ut elit. Duis non fringilla justo. Sed quis mauris vitae massa ornare rhoncus sed eu risus. In hac habitasse platea dictumst. In nisl enim, maximus vel felis vitae, dictum efficitur ipsum. In malesuada, lacus malesuada mattis semper, tellus erat ultrices purus, gravida egestas mauris mi eget turpis. Mauris sem orci, porttitor ac nisi sit amet, varius consectetur purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean nec justo ut eros convallis ornare. Ut tincidunt arcu et congue mattis. Quisque vitae consectetur libero. Sed ac sem gravida, condimentum orci eget, efficitur turpis.</p>
        <h3>Sub Title</h3>
        <p>Phasellus ut tellus ex. Donec faucibus rhoncus convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo, elit vel sodales interdum, nulla est viverra felis, non vehicula erat velit quis metus. Donec elementum ac dui id convallis. Vivamus pellentesque erat massa, ut sodales lectus pulvinar pellentesque. Proin at elit ut urna commodo sodales. Integer non tortor maximus tortor vehicula pretium eget quis dui. Suspendisse nunc lorem, varius sed vestibulum at, maximus nec odio. Donec blandit mattis imperdiet. Suspendisse faucibus vestibulum tincidunt. Morbi vel justo sed felis fringilla egestas.</p>
        <p>Suspendisse potenti. Praesent bibendum pretium neque, quis imperdiet erat hendrerit vitae. Donec maximus ipsum et urna fermentum, nec vulputate odio gravida. Nunc commodo pulvinar ex. Ut non egestas odio. Suspendisse eget elit sollicitudin, pharetra sapien id, mattis velit. In pharetra convallis nibh a mattis. In egestas nunc non libero luctus, in porta erat gravida. Donec ut sodales dui, ut ornare ipsum. Phasellus pretium, urna ac fermentum rhoncus, ante nulla semper orci, eu pulvinar turpis metus rhoncus enim.</p>
        <h4>Sub Sub Title</h4>
        <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi ut dignissim ligula, a rutrum orci. Suspendisse maximus faucibus luctus. Duis commodo condimentum viverra. Duis et odio mollis, eleifend odio at, lacinia massa. Nam ultrices malesuada lacus ut porttitor. Nam mattis pharetra cursus. Vestibulum imperdiet efficitur dolor sed eleifend. Quisque sodales purus nunc. Donec dignissim pretium interdum. Proin a porta quam, vitae dignissim justo. Morbi et hendrerit erat, luctus elementum erat. Aenean dignissim est eu lorem accumsan, vel commodo justo lobortis. Ut risus quam, finibus quis nibh eu, maximus sodales sapien. Aliquam semper leo ut turpis tristique sodales.</p>
        <h5>Smallest Sub Title</h5>
        <p>Donec eget massa sit amet mi tempor varius. Phasellus nulla mauris, suscipit ut felis vel, congue sollicitudin diam. Morbi hendrerit rutrum accumsan. Nullam ut urna eget dui lacinia tincidunt vitae placerat sapien. Nunc ut risus nec eros condimentum placerat. Nam pharetra turpis tellus, eget pharetra risus efficitur vel. Quisque viverra, odio non vulputate cursus, lacus sapien convallis nisl, eu porttitor ipsum ipsum vitae quam. Fusce imperdiet lectus sed varius blandit.</p>
        <p>Morbi tortor nibh, ornare a dictum et, facilisis ut nunc. Sed sodales ante at purus tincidunt convallis. Phasellus sed tellus ac ante tincidunt consectetur a eget mauris. Maecenas vitae laoreet lectus. Duis at mollis libero. Fusce sit amet consequat magna. Donec eget velit aliquet dolor finibus eleifend at at nulla.</p>
      </Container>
    </section>

    <section className="text-light bg-dark">
      <Container>
        <h2>Light on Dark</h2>
        <p className="lead"><strong>Lorem ipsum</strong> dolor sit amet</p>
        <p>Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit</strong>. Nam ipsum eros, lacinia sed dapibus sed, accumsan ut diam. In commodo, nisi eu ullamcorper pretium, eros felis fringilla nunc, quis laoreet urna lectus ut elit. Duis non fringilla justo. Sed quis mauris vitae massa ornare rhoncus sed eu risus. In hac habitasse platea dictumst. In nisl enim, maximus vel felis vitae, dictum efficitur ipsum. In malesuada, lacus malesuada mattis semper, tellus erat ultrices purus, gravida egestas mauris mi eget turpis. Mauris sem orci, porttitor ac nisi sit amet, varius consectetur purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean nec justo ut eros convallis ornare. Ut tincidunt arcu et congue mattis. Quisque vitae consectetur libero. Sed ac sem gravida, condimentum orci eget, efficitur turpis.</p>
        <h3>Sub Title</h3>
        <p>Phasellus ut tellus ex. Donec faucibus rhoncus convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo, elit vel sodales interdum, nulla est viverra felis, non vehicula erat velit quis metus. Donec elementum ac dui id convallis. Vivamus pellentesque erat massa, ut sodales lectus pulvinar pellentesque. Proin at elit ut urna commodo sodales. Integer non tortor maximus tortor vehicula pretium eget quis dui. Suspendisse nunc lorem, varius sed vestibulum at, maximus nec odio. Donec blandit mattis imperdiet. Suspendisse faucibus vestibulum tincidunt. Morbi vel justo sed felis fringilla egestas.</p>
        <p>Suspendisse potenti. Praesent bibendum pretium neque, quis imperdiet erat hendrerit vitae. Donec maximus ipsum et urna fermentum, nec vulputate odio gravida. Nunc commodo pulvinar ex. Ut non egestas odio. Suspendisse eget elit sollicitudin, pharetra sapien id, mattis velit. In pharetra convallis nibh a mattis. In egestas nunc non libero luctus, in porta erat gravida. Donec ut sodales dui, ut ornare ipsum. Phasellus pretium, urna ac fermentum rhoncus, ante nulla semper orci, eu pulvinar turpis metus rhoncus enim.</p>
        <h4>Sub Sub Title</h4>
        <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi ut dignissim ligula, a rutrum orci. Suspendisse maximus faucibus luctus. Duis commodo condimentum viverra. Duis et odio mollis, eleifend odio at, lacinia massa. Nam ultrices malesuada lacus ut porttitor. Nam mattis pharetra cursus. Vestibulum imperdiet efficitur dolor sed eleifend. Quisque sodales purus nunc. Donec dignissim pretium interdum. Proin a porta quam, vitae dignissim justo. Morbi et hendrerit erat, luctus elementum erat. Aenean dignissim est eu lorem accumsan, vel commodo justo lobortis. Ut risus quam, finibus quis nibh eu, maximus sodales sapien. Aliquam semper leo ut turpis tristique sodales.</p>
        <h5>Smallest Sub Title</h5>
        <p>Donec eget massa sit amet mi tempor varius. Phasellus nulla mauris, suscipit ut felis vel, congue sollicitudin diam. Morbi hendrerit rutrum accumsan. Nullam ut urna eget dui lacinia tincidunt vitae placerat sapien. Nunc ut risus nec eros condimentum placerat. Nam pharetra turpis tellus, eget pharetra risus efficitur vel. Quisque viverra, odio non vulputate cursus, lacus sapien convallis nisl, eu porttitor ipsum ipsum vitae quam. Fusce imperdiet lectus sed varius blandit.</p>
        <p>Morbi tortor nibh, ornare a dictum et, facilisis ut nunc. Sed sodales ante at purus tincidunt convallis. Phasellus sed tellus ac ante tincidunt consectetur a eget mauris. Maecenas vitae laoreet lectus. Duis at mollis libero. Fusce sit amet consequat magna. Donec eget velit aliquet dolor finibus eleifend at at nulla.</p>
      </Container>
    </section>

    <section className="text-dark bg-light">
      <Container>
        <h2>Dark on Light</h2>
        <p className="lead"><strong>Lorem ipsum</strong> dolor sit amet</p>
        <p>Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit</strong>. Nam ipsum eros, lacinia sed dapibus sed, accumsan ut diam. In commodo, nisi eu ullamcorper pretium, eros felis fringilla nunc, quis laoreet urna lectus ut elit. Duis non fringilla justo. Sed quis mauris vitae massa ornare rhoncus sed eu risus. In hac habitasse platea dictumst. In nisl enim, maximus vel felis vitae, dictum efficitur ipsum. In malesuada, lacus malesuada mattis semper, tellus erat ultrices purus, gravida egestas mauris mi eget turpis. Mauris sem orci, porttitor ac nisi sit amet, varius consectetur purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean nec justo ut eros convallis ornare. Ut tincidunt arcu et congue mattis. Quisque vitae consectetur libero. Sed ac sem gravida, condimentum orci eget, efficitur turpis.</p>
        <h3>Sub Title</h3>
        <p>Phasellus ut tellus ex. Donec faucibus rhoncus convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo, elit vel sodales interdum, nulla est viverra felis, non vehicula erat velit quis metus. Donec elementum ac dui id convallis. Vivamus pellentesque erat massa, ut sodales lectus pulvinar pellentesque. Proin at elit ut urna commodo sodales. Integer non tortor maximus tortor vehicula pretium eget quis dui. Suspendisse nunc lorem, varius sed vestibulum at, maximus nec odio. Donec blandit mattis imperdiet. Suspendisse faucibus vestibulum tincidunt. Morbi vel justo sed felis fringilla egestas.</p>
        <p>Suspendisse potenti. Praesent bibendum pretium neque, quis imperdiet erat hendrerit vitae. Donec maximus ipsum et urna fermentum, nec vulputate odio gravida. Nunc commodo pulvinar ex. Ut non egestas odio. Suspendisse eget elit sollicitudin, pharetra sapien id, mattis velit. In pharetra convallis nibh a mattis. In egestas nunc non libero luctus, in porta erat gravida. Donec ut sodales dui, ut ornare ipsum. Phasellus pretium, urna ac fermentum rhoncus, ante nulla semper orci, eu pulvinar turpis metus rhoncus enim.</p>
        <h4>Sub Sub Title</h4>
        <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi ut dignissim ligula, a rutrum orci. Suspendisse maximus faucibus luctus. Duis commodo condimentum viverra. Duis et odio mollis, eleifend odio at, lacinia massa. Nam ultrices malesuada lacus ut porttitor. Nam mattis pharetra cursus. Vestibulum imperdiet efficitur dolor sed eleifend. Quisque sodales purus nunc. Donec dignissim pretium interdum. Proin a porta quam, vitae dignissim justo. Morbi et hendrerit erat, luctus elementum erat. Aenean dignissim est eu lorem accumsan, vel commodo justo lobortis. Ut risus quam, finibus quis nibh eu, maximus sodales sapien. Aliquam semper leo ut turpis tristique sodales.</p>
        <h5>Smallest Sub Title</h5>
        <p>Donec eget massa sit amet mi tempor varius. Phasellus nulla mauris, suscipit ut felis vel, congue sollicitudin diam. Morbi hendrerit rutrum accumsan. Nullam ut urna eget dui lacinia tincidunt vitae placerat sapien. Nunc ut risus nec eros condimentum placerat. Nam pharetra turpis tellus, eget pharetra risus efficitur vel. Quisque viverra, odio non vulputate cursus, lacus sapien convallis nisl, eu porttitor ipsum ipsum vitae quam. Fusce imperdiet lectus sed varius blandit.</p>
        <p>Morbi tortor nibh, ornare a dictum et, facilisis ut nunc. Sed sodales ante at purus tincidunt convallis. Phasellus sed tellus ac ante tincidunt consectetur a eget mauris. Maecenas vitae laoreet lectus. Duis at mollis libero. Fusce sit amet consequat magna. Donec eget velit aliquet dolor finibus eleifend at at nulla.</p>
      </Container>
    </section>

    <section>
      <Container>
        <h2>Default</h2>
        <p className="lead"><strong>Lorem ipsum</strong> dolor sit amet</p>
        <Bar className="text-primary" />
        <p>Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit</strong>. Nam ipsum eros, lacinia sed dapibus sed, accumsan ut diam. In commodo, nisi eu ullamcorper pretium, eros felis fringilla nunc, quis laoreet urna lectus ut elit. Duis non fringilla justo. Sed quis mauris vitae massa ornare rhoncus sed eu risus. In hac habitasse platea dictumst. In nisl enim, maximus vel felis vitae, dictum efficitur ipsum. In malesuada, lacus malesuada mattis semper, tellus erat ultrices purus, gravida egestas mauris mi eget turpis. Mauris sem orci, porttitor ac nisi sit amet, varius consectetur purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean nec justo ut eros convallis ornare. Ut tincidunt arcu et congue mattis. Quisque vitae consectetur libero. Sed ac sem gravida, condimentum orci eget, efficitur turpis.</p>
        <h3>Sub Title</h3>
        <p>Phasellus ut tellus ex. Donec faucibus rhoncus convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo, elit vel sodales interdum, nulla est viverra felis, non vehicula erat velit quis metus. Donec elementum ac dui id convallis. Vivamus pellentesque erat massa, ut sodales lectus pulvinar pellentesque. Proin at elit ut urna commodo sodales. Integer non tortor maximus tortor vehicula pretium eget quis dui. Suspendisse nunc lorem, varius sed vestibulum at, maximus nec odio. Donec blandit mattis imperdiet. Suspendisse faucibus vestibulum tincidunt. Morbi vel justo sed felis fringilla egestas.</p>
        <p>Suspendisse potenti. Praesent bibendum pretium neque, quis imperdiet erat hendrerit vitae. Donec maximus ipsum et urna fermentum, nec vulputate odio gravida. Nunc commodo pulvinar ex. Ut non egestas odio. Suspendisse eget elit sollicitudin, pharetra sapien id, mattis velit. In pharetra convallis nibh a mattis. In egestas nunc non libero luctus, in porta erat gravida. Donec ut sodales dui, ut ornare ipsum. Phasellus pretium, urna ac fermentum rhoncus, ante nulla semper orci, eu pulvinar turpis metus rhoncus enim.</p>
        <h4>Sub Sub Title</h4>
        <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi ut dignissim ligula, a rutrum orci. Suspendisse maximus faucibus luctus. Duis commodo condimentum viverra. Duis et odio mollis, eleifend odio at, lacinia massa. Nam ultrices malesuada lacus ut porttitor. Nam mattis pharetra cursus. Vestibulum imperdiet efficitur dolor sed eleifend. Quisque sodales purus nunc. Donec dignissim pretium interdum. Proin a porta quam, vitae dignissim justo. Morbi et hendrerit erat, luctus elementum erat. Aenean dignissim est eu lorem accumsan, vel commodo justo lobortis. Ut risus quam, finibus quis nibh eu, maximus sodales sapien. Aliquam semper leo ut turpis tristique sodales.</p>
        <h5>Smallest Sub Title</h5>
        <p>Donec eget massa sit amet mi tempor varius. Phasellus nulla mauris, suscipit ut felis vel, congue sollicitudin diam. Morbi hendrerit rutrum accumsan. Nullam ut urna eget dui lacinia tincidunt vitae placerat sapien. Nunc ut risus nec eros condimentum placerat. Nam pharetra turpis tellus, eget pharetra risus efficitur vel. Quisque viverra, odio non vulputate cursus, lacus sapien convallis nisl, eu porttitor ipsum ipsum vitae quam. Fusce imperdiet lectus sed varius blandit.</p>
        <p>Morbi tortor nibh, ornare a dictum et, facilisis ut nunc. Sed sodales ante at purus tincidunt convallis. Phasellus sed tellus ac ante tincidunt consectetur a eget mauris. Maecenas vitae laoreet lectus. Duis at mollis libero. Fusce sit amet consequat magna. Donec eget velit aliquet dolor finibus eleifend at at nulla.</p>
      </Container>
    </section>

    <section className="text-dark bg-gray">
      <Container>
        <h2>Dark on Gray</h2>
        <p className="lead"><strong>Lorem ipsum</strong> dolor sit amet</p>
        <Bar />
        <p>Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit</strong>. Nam ipsum eros, lacinia sed dapibus sed, accumsan ut diam. In commodo, nisi eu ullamcorper pretium, eros felis fringilla nunc, quis laoreet urna lectus ut elit. Duis non fringilla justo. Sed quis mauris vitae massa ornare rhoncus sed eu risus. In hac habitasse platea dictumst. In nisl enim, maximus vel felis vitae, dictum efficitur ipsum. In malesuada, lacus malesuada mattis semper, tellus erat ultrices purus, gravida egestas mauris mi eget turpis. Mauris sem orci, porttitor ac nisi sit amet, varius consectetur purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean nec justo ut eros convallis ornare. Ut tincidunt arcu et congue mattis. Quisque vitae consectetur libero. Sed ac sem gravida, condimentum orci eget, efficitur turpis.</p>
        <h3>Sub Title</h3>
        <p>Phasellus ut tellus ex. Donec faucibus rhoncus convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo, elit vel sodales interdum, nulla est viverra felis, non vehicula erat velit quis metus. Donec elementum ac dui id convallis. Vivamus pellentesque erat massa, ut sodales lectus pulvinar pellentesque. Proin at elit ut urna commodo sodales. Integer non tortor maximus tortor vehicula pretium eget quis dui. Suspendisse nunc lorem, varius sed vestibulum at, maximus nec odio. Donec blandit mattis imperdiet. Suspendisse faucibus vestibulum tincidunt. Morbi vel justo sed felis fringilla egestas.</p>
        <p>Suspendisse potenti. Praesent bibendum pretium neque, quis imperdiet erat hendrerit vitae. Donec maximus ipsum et urna fermentum, nec vulputate odio gravida. Nunc commodo pulvinar ex. Ut non egestas odio. Suspendisse eget elit sollicitudin, pharetra sapien id, mattis velit. In pharetra convallis nibh a mattis. In egestas nunc non libero luctus, in porta erat gravida. Donec ut sodales dui, ut ornare ipsum. Phasellus pretium, urna ac fermentum rhoncus, ante nulla semper orci, eu pulvinar turpis metus rhoncus enim.</p>
        <h4>Sub Sub Title</h4>
        <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi ut dignissim ligula, a rutrum orci. Suspendisse maximus faucibus luctus. Duis commodo condimentum viverra. Duis et odio mollis, eleifend odio at, lacinia massa. Nam ultrices malesuada lacus ut porttitor. Nam mattis pharetra cursus. Vestibulum imperdiet efficitur dolor sed eleifend. Quisque sodales purus nunc. Donec dignissim pretium interdum. Proin a porta quam, vitae dignissim justo. Morbi et hendrerit erat, luctus elementum erat. Aenean dignissim est eu lorem accumsan, vel commodo justo lobortis. Ut risus quam, finibus quis nibh eu, maximus sodales sapien. Aliquam semper leo ut turpis tristique sodales.</p>
        <h5>Smallest Sub Title</h5>
        <p>Donec eget massa sit amet mi tempor varius. Phasellus nulla mauris, suscipit ut felis vel, congue sollicitudin diam. Morbi hendrerit rutrum accumsan. Nullam ut urna eget dui lacinia tincidunt vitae placerat sapien. Nunc ut risus nec eros condimentum placerat. Nam pharetra turpis tellus, eget pharetra risus efficitur vel. Quisque viverra, odio non vulputate cursus, lacus sapien convallis nisl, eu porttitor ipsum ipsum vitae quam. Fusce imperdiet lectus sed varius blandit.</p>
        <p>Morbi tortor nibh, ornare a dictum et, facilisis ut nunc. Sed sodales ante at purus tincidunt convallis. Phasellus sed tellus ac ante tincidunt consectetur a eget mauris. Maecenas vitae laoreet lectus. Duis at mollis libero. Fusce sit amet consequat magna. Donec eget velit aliquet dolor finibus eleifend at at nulla.</p>
      </Container>
    </section>

  </DefaultLayout>
);

export default ExamplePage;
