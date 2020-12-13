import { PureComponent } from 'react'; 
import _isNil from 'lodash/isNil';
import _get from 'lodash/get';
import Router from 'next/router';
 
class IndexPage extends PureComponent {
    static getInitialProps(ctx) {
        const { token } = ctx.query || {};
        console.log("get props", ctx, ctx.query.token, token);
        if (!token) {
            ctx.res.writeHead(302, { Location: '/error?errorCode=NO_TOKEN' });
            ctx.res.end();
          }

          ctx.res.writeHead(302, { Location: 'in-service' });
          ctx.res.end();
          Router.replace('in-service');  

          return {};
    }
  render() {
      console.log("I am in render index.js");
    return (
      <div>
        Loading
      </div>
    );
  }
}

export default IndexPage;
