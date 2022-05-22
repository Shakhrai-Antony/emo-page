import React, {useEffect} from 'react'
import s from './privacyPolicy.module.scss'

export const PrivacyPolicy = () => {

    useEffect(() => {
        window.scrollTo({
            top: 100,
            left: 100,
            behavior: 'smooth'
        })
    }, [])

    return (
        <div className={s.privacy_policy_section}>
            <div className={s.privacy_policy}>
                <h1>privacy policy</h1>
                <p>This Privacy Policy describes how emosnotdead.com (the “Site” or “we”) collects, uses, and discloses your Personal Information when you visit or make a purchase from the Site.</p>
            </div>
            <div className={s.collection_personal_information_section}>
                <h1>collecting personal information</h1>
                <p>When you visit the Site, we collect certain information about your device, your interaction with the Site, and information necessary to process your purchases. We may also collect additional information if you contact us for customer support. In this Privacy Policy, we refer to any information that can uniquely identify an individual (including the information below) as “Personal Information”. See the list below for more information about what Personal Information we collect and why.</p>
            </div>
            <div className={s.device_information_section}>
                <h4><u>Device information</u></h4>
                <ul>
                    <li><strong>Examples of Personal Information collected:</strong> version of web browser, IP address, time zone, cookie information, what sites or products you view, search terms, and how you interact with the Site.</li>
                    <li><strong>Purpose of collection:</strong>  to load the Site accurately for you, and to perform analytics on Site usage to optimize our Site.</li>
                    <li><strong>Source of collection:</strong> Collected automatically when you access our Site using cookies, log files, web beacons, tags, or pixels.</li>
                    <li><strong>Disclosure for a business purpose:</strong> shared with our processor Shopify.</li>
                </ul>
            </div>
            <div className={s.order_information_section}>
                <h4><u>Order information</u></h4>
                <ul>
                    <li><strong>Examples of Personal Information collected:</strong> name, billing address, shipping address, payment information (including credit card numbers), email address, and phone number.</li>
                    <li><strong>Purpose of collection:</strong> to provide products or services to you to fulfill our contract, to process your payment information, arrange for shipping, and provide you with invoices and/or order confirmations, communicate with you, screen our orders for potential risk or fraud, and when in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.</li>
                    <li><strong>Source of collection:</strong> collected from you.</li>
                    <li><strong>Disclosure for a business purpose:</strong> shared with our processor Shopify.</li>
                </ul>
            </div>
            <div className={s.custom_support_section}>
                <h4><u>Customer support information</u></h4>
                <ul>
                    <li><strong>Purpose of collection:</strong> to provide customer support.</li>
                    <li><strong>Source of collection:</strong> collected from you.</li>
                </ul>
            </div>
            <div className={s.minors_section}>
                <h2>Minors</h2>
                <p>The Site is not intended for individuals under the age of 13. We do not intentionally collect Personal Information from children. If you are the parent or guardian and believe your child has provided us with Personal Information, please contact us at the address below to request deletion.</p>
            </div>
            <div className={s.sharing_personal_information_section}>
                <h1>sharing personal information</h1>
                <p>We share your Personal Information with service providers to help us provide our services and fulfill our contracts with you, as described above. For example:</p>
                <ul>
                    <li>We use Shopify to power our online store. You can read more about how Shopify uses your Personal Information here: <a href='https://www.shopify.com/legal/privacy'><u>https://www.shopify.com/legal/privacy</u></a>.</li>
                    <li>We may share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.</li>
                </ul>
            </div>
            <div className={s.behavioral_advertising_section}>
                <h2>Behavioral Advertising</h2>
                <p>As described above, we use your Personal Information to provide you with targeted advertisements or marketing communications we believe may be of interest to you. For example:</p>
                <ul>
                    <li>We use Google Analytics to help us understand how our customers use the Site. You can read more about how Google uses your Personal Information here: <a href='https://policies.google.com/privacy?hl=en'><u>https://policies.google.com/privacy?hl=en</u></a> .You can also opt-out of Google Analytics here: <a href='https://tools.google.com/dlpage/gaoptout'><u>https://tools.google.com/dlpage/gaoptout</u></a>.</li>
                    <li>We share information about your use of the Site, your purchases, and your interaction with our ads on other websites with our advertising partners. We collect and share some of this information directly with our advertising partners, and in some cases through the use of cookies or other similar technologies (which you may consent to, depending on your location).</li>
                </ul>
                <p>For more information about how targeted advertising works, you can visit the Network Advertising Initiative’s (“NAI”) educational page at <a href='https://thenai.org/about-online-advertising/faq/?tab=2'><u>http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work</u></a>.</p>
                <p>You can opt out of targeted advertising by:</p>
                <ul>
                    <li>FACEBOOK - <a href='https://www.facebook.com/settings/?tab=ads'><u>https://www.facebook.com/settings/?tab=ads</u></a></li>
                    <li>GOOGLE - <a href='https://www.google.com/settings/ads/anonymous'><u>https://www.google.com/settings/ads/anonymous</u></a></li>
                    <li>BING - <a href='https://about.ads.microsoft.com/en-us/resources/policies/personalized-ads'><u>https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads]</u></a></li>
                    <li>SnapChat - <a href='https://support.snapchat.com/en-US/a/advertising-preferences'><u>https://support.snapchat.com/en-US/a/advertising-preferences</u></a></li>
                </ul>
                <p>Additionally, you can opt out of some of these services by visiting the Digital Advertising Alliance’s opt-out portal at: <a href='https://optout.aboutads.info/?c=2&lang=EN'><u>http://optout.aboutads.info/</u></a>.</p>
            </div>
            <div className={s.using_personal_information_section}>
                <h1>using personal information</h1>
                <p>We use your personal Information to provide our services to you, which includes: offering products for sale, processing payments, shipping and fulfillment of your order, and keeping you up to date on new products, services, and offers.</p>
            </div>
            <div className={s.lawful_basis_section}>
                <h2>Lawful basis</h2>
                <p>Pursuant to the General Data Protection Regulation (“GDPR”), if you are a resident of the European Economic Area (“EEA”), we process your personal information under the following lawful bases:</p>
                <ul>
                    <li>Your consent;</li>
                    <li>Compliance with our legal obligations;</li>
                    <li>To perform a task carried out in the public interest;</li>
                    <li>For our legitimate interests, which do not override your fundamental rights and freedoms.</li>
                </ul>
            </div>
            <div className={s.retention_section}>
                <h2>Retention</h2>
                <p>When you place an order through the Site, we will retain your Personal Information for our records unless and until you ask us to erase this information. For more information on your right of erasure, please see the ‘Your rights’ section below.</p>
            </div>
            <div className={s.automatic_decision_making_section}>
                <h2>Automatic decision-making</h2>
                <p>If you are a resident of the EEA, you have the right to object to processing based solely on automated decision-making (which includes profiling), when that decision-making has a legal effect on you or otherwise significantly affects you.</p>
                <p>We DO NOT engage in fully automated decision-making that has a legal or otherwise significant effect using customer data.</p>
                <p>Our processor Shopify uses limited automated decision-making to prevent fraud that does not have a legal or otherwise significant effect on you.</p>
                <p>Services that include elements of automated decision-making include:</p>
                <ul>
                    <li>Temporary denylist of IP addresses associated with repeated failed transactions. This denylist persists for a small number of hours.</li>
                    <li>Temporary denylist of credit cards associated with denylisted IP addresses. This denylist persists for a small number of days.</li>
                </ul>
            </div>
            <div className={s.your_rights_section}>
                <h1>your rights</h1>
                <h2>GDPR</h2>
                <p>If you are a resident of the EEA, you have the right to access the Personal Information we hold about you, to port it to a new service, and to ask that your Personal Information be corrected, updated, or erased. If you would like to exercise these rights, please contact us through the contact information below.</p>
                <p>Your Personal Information will be initially processed in Ireland and then will be transferred outside of Europe for storage and further processing, including to Canada and the United States. For more information on how data transfers comply with the GDPR, see Shopify’s GDPR Whitepaper: <a href='https://help.shopify.com/en/manual/your-account/privacy/GDPR'><u>https://help.shopify.com/en/manual/your-account/privacy/GDPR</u></a>.</p>
            </div>
            <div className={s.ccpa_section}>
                <h2>CCPA</h2>
                <p>If you are a resident of California, you have the right to access the Personal Information we hold about you (also known as the ‘Right to Know’), to port it to a new service, and to ask that your Personal Information be corrected, updated, or erased. If you would like to exercise these rights, please contact us through the contact information below.</p>
                <p>If you would like to designate an authorized agent to submit these requests on your behalf, please contact us at the address below.</p>
            </div>
            <div className={s.cookies_section}>
                <h1>cookies</h1>
                <p>A cookie is a small amount of information that’s downloaded to your computer or device when you visit our Site. We use a number of different cookies, including functional, performance, advertising, and social media or content cookies. Cookies make your browsing experience better by allowing the website to remember your actions and preferences (such as login and region selection). This means you don’t have to re-enter this information each time you return to the site or browse from one page to another. Cookies also provide information on how people use the website, for instance whether it’s their first time visiting or if they are a frequent visitor.</p>
                <p>We use the following cookies to optimize your experience on our Site and to provide our services.</p>
            </div>
            <div className={s.cookies_td_section}>
                <h2>Cookies Necessary for the Functioning of the Store</h2>
                <tr>
                    <td>Name</td>
                    <td>Function</td>
                </tr>
                <tr>
                    <td>_ab</td>
                    <td>Used in connection with access to admin.</td>
                </tr>
                <tr>
                    <td>_secure_session_id</td>
                    <td>Used in connection with navigation through a storefront.</td>
                </tr>
                <tr>
                    <td>cart</td>
                    <td>Used in connection with shopping cart.</td>
                </tr>
                <tr>
                    <td>cart_sig</td>
                    <td>Used in connection with checkout.</td>
                </tr>
                <tr>
                    <td>cart_ts</td>
                    <td>Used in connection with checkout.</td>
                </tr>
                <tr>
                    <td>checkout_token</td>
                    <td>Used in connection with checkout.</td>
                </tr>
                <tr>
                    <td>secret</td>
                    <td>Used in connection with checkout.</td>
                </tr>
                <tr>
                    <td>secure_customer_sig</td>
                    <td>Used in connection with customer login.</td>
                </tr>
                <tr>
                    <td>storefront_digest</td>
                    <td>Used in connection with customer login.</td>
                </tr>
                <tr>
                    <td>_shopify_u</td>
                    <td>Used to facilitate updating customer account information.</td>
                </tr>
            </div>
            <div className={s.reporting_analytics_section}>
                <h2>Reporting and Analytics</h2>
                <tr>
                    <td>Name</td>
                    <td>Function</td>
                </tr>
                <tr>
                    <td>_tracking_consent</td>
                    <td>Tracking preferences.</td>
                </tr>
                <tr>
                    <td>_landing_page</td>
                    <td>Track landing pages</td>
                </tr>
                <tr>
                    <td>_orig_referrer</td>
                    <td>Track landing pages</td>
                </tr>
                <tr>
                    <td>_s</td>
                    <td>Shopify analytics.</td>
                </tr>
                <tr>
                    <td>_shopify_fs</td>
                    <td>Shopify analytics.</td>
                </tr>
                <tr>
                    <td>_shopify_s</td>
                    <td>Shopify analytics.</td>
                </tr>
                <tr>
                    <td>_shopify_sa_p</td>
                    <td>Shopify analytics relating to marketing & referrals.</td>
                </tr>
                <tr>
                    <td>_shopify_sa_t</td>
                    <td>Shopify analytics relating to marketing & referrals.</td>
                </tr>
                <tr>
                    <td>_shopify_y</td>
                    <td>Shopify analytics.</td>
                </tr>
                <tr>
                    <td>_y</td>
                    <td>Shopify analytics.</td>
                </tr>
                <p>The length of time that a cookie remains on your computer or mobile device depends on whether it is a “persistent” or “session” cookie. Session cookies last until you stop browsing and persistent cookies last until they expire or are deleted. Most of the cookies we use are persistent and will expire between 30 minutes and two years from the date they are downloaded to your device.</p>
                <p>You can control and manage cookies in various ways. Please keep in mind that removing or blocking cookies can negatively impact your user experience and parts of our website may no longer be fully accessible.</p>
                <p>Most browsers automatically accept cookies, but you can choose whether or not to accept cookies through your browser controls, often found in your browser’s “Tools” or “Preferences” menu. For more information on how to modify your browser settings or how to block, manage or filter cookies can be found in your browser’s help file or through such sites as <a href='https://emosnotdead.com/policies/www.allaboutcookies.org'><u>www.allaboutcookies.org</u></a>.</p>
                <p>Additionally, please note that blocking cookies may not completely prevent how we share information with third parties such as our advertising partners. To exercise your rights or opt-out of certain uses of your information by these parties, please follow the instructions in the “Behavioral Advertising” section above.</p>
            </div>
            <div className={s.do_not_track_section}>
                <h2>Do Not Track</h2>
                <p>Please note that because there is no consistent industry understanding of how to respond to “Do Not Track” signals, we do not alter our data collection and usage practices when we detect such a signal from your browser.</p>
            </div>
            <div className={s.changes_section}>
                <h1>changes</h1>
                <p>We may update this Privacy Policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons.</p>
            </div>
            <div className={s.contact_section}>
                <h1>contact</h1>
                <p>For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by filling out the form on <a href='http://emoneverdies-help.topdrawermerch.com/support/tickets/new'><u>this page</u></a> or by mail using the details provided below:</p>
                <p>shop@emosnotdead.com</p>
            </div>
        </div>
    )
}