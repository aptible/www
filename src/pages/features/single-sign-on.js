import React from 'react';
import { Helmet } from 'react-helmet';
import AptibleLayout from '../../components/layouts/AptibleLayout';
import FeaturePageHero from '../../components/deploy/FeaturePageHero';
import FeaturePageFeatureList from '../../components/deploy/FeaturePageFeatureList';
import Feature from '../solutions/components/Feature';
import securityImage from '../../images/solutions/security-controls.svg';

export default () => (
  <AptibleLayout>
    <Helmet>
      <title>
        Single Sign-on (SSO)
      </title>
      <meta
        name="description"
        content="Seamlessly manage your team's access to your Aptible account by enrolling Aptible with your SSO provider."
      />
    </Helmet>

    <FeaturePageHero
       h1={
        <h1>
          Single Sign-On (SSO)
        </h1>
      }
      summary={
        <p className="XL">
          Seamlessly manage your team's access to your Aptible account by enrolling Aptible with your SSO provider.
        </p>
      }
      leadFormId="Single Sign On"
    />
    <FeaturePageFeatureList>
      <Feature
        title="Secure Access for Users on Aptible With SSO"
        description="
          With Single Sign On (SSO) enabled, you can allow users of your organization to
          login to Aptible using an SSO provider like Okta and GSuite. This allows your IT
          teams to streamline and control access to your Aptible resources through a separate,
          single authentication service, simplifying the authentication process across your
          teams and improving overall productivity.
        "
        smallImage={null}
        heroImage={
          <img
              src={securityImage}
              alt="Security Readiness dashboard on Aptible"
          />
        }
        steps={[
          [
            {
              id: '01',
              title: 'SAML 2.0 support',
              text:
                `Aptible supports the industry-standard SAML 2.0 protocol for using an external
                provider. Most SSO Providers support SAML, including Okta and Google’s GSuite.
                SAML provides a secure method to transfer identity and authentication
                information between the SSO provider and Aptible.`
            },
            {
              id: '02',
              title: 'SSO Enforcement',
              text:
                `When Single Sign On (SSO) Enforcement is enabled, your users will only be able to access your
                organization’s resources by using your configured SAML provider to authenticate with Aptible.
                You can then enforce any restrictions allowed by your SSO provider on logins, such as
                password rotation or use of specific second factors.

                Account owners are always exempted from SSO enforcement for emergency password recovery purposes.
                `,
            },
            {
              id: null, title: null, text: null
            },
          ]
        ]}
      />
    </FeaturePageFeatureList>
  </AptibleLayout>
);
