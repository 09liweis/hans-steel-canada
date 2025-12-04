import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { COMPANY_ADDRESS } from '../constants/text'

const CookiePolicy: NextPage = () => {
  return (
    <>
      <Head>
        <title>Cookie Policy — Hans Steel Canada</title>
      </Head>

      <div className="container mx-auto px-4 py-12">
        <section className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-10">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-sm text-gray-500 mb-6">Last Updated: October 24, 2025</p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">What Are Cookies</h2>
                <p className="leading-relaxed mb-4">
                  As is common practice with almost all professional websites, this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored however this may downgrade or 'break' certain elements of the site's functionality.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Cookies</h2>
                <p className="leading-relaxed mb-4">
                  We use cookies for a variety of reasons detailed below. Unfortunately in most cases there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Disabling Cookies</h2>
                <p className="leading-relaxed mb-4">
                  You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of this site. Therefore it is recommended that you do not disable cookies.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">The Cookies We Set</h2>

                <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Site Preferences Cookies</h3>
                <p className="leading-relaxed mb-4">
                  In order to provide you with a great experience on this site we provide the functionality to set your preferences for how this site runs when you use it. In order to remember your preferences we need to set cookies so that this information can be called whenever you interact with a page is affected by your preferences.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Forms Related Cookies</h3>
                <p className="leading-relaxed mb-4">
                  When you submit data to through a form such as those found on contact pages or comment forms cookies may be set to remember your user details for future correspondence.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third Party Cookies</h2>
                <p className="leading-relaxed mb-4">
                  In some special cases we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Google Analytics</h3>
                <p className="leading-relaxed mb-4">
                  This site uses Google Analytics which is one of the most widespread and trusted analytics solution on the web for helping us to understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content.
                </p>
                <p className="leading-relaxed mb-4">
                  For more information on Google Analytics cookies, see the official Google Analytics page.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Third Party Analytics</h3>
                <p className="leading-relaxed mb-4">
                  From time to time we test new features and make subtle changes to the way that the site is delivered. When we are still testing new features these cookies may be used to ensure that you receive a consistent experience whilst on the site whilst ensuring we understand which optimizations our users appreciate the most.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Social Media Cookies</h3>
                <p className="leading-relaxed mb-4">
                  We also use social media buttons and/or plugins on this site that allow you to connect with your social network in various ways. For these to work, social media sites including but not limited to Facebook, Twitter, LinkedIn, and Instagram, will set cookies through our site which may be used to enhance your profile on their site or contribute to the data they hold for various purposes outlined in their respective privacy policies.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Types of Cookies Used</h2>

                <div className="overflow-x-auto mt-4">
                  <table className="min-w-full border border-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b border-gray-200">Cookie Type</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b border-gray-200">Purpose</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b border-gray-200">Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="px-4 py-3 text-sm text-gray-700">Strictly Necessary</td>
                        <td className="px-4 py-3 text-sm text-gray-700">These cookies are essential for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.</td>
                        <td className="px-4 py-3 text-sm text-gray-700">Session</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="px-4 py-3 text-sm text-gray-700">Performance Cookies</td>
                        <td className="px-4 py-3 text-sm text-gray-700">These cookies collect information about how visitors use our website, such as which pages are visited most often. This data helps us optimize our website.</td>
                        <td className="px-4 py-3 text-sm text-gray-700">Up to 2 years</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="px-4 py-3 text-sm text-gray-700">Functionality Cookies</td>
                        <td className="px-4 py-3 text-sm text-gray-700">These cookies enable the website to provide enhanced functionality and personalization based on your interaction with the site.</td>
                        <td className="px-4 py-3 text-sm text-gray-700">Up to 1 year</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-700">Targeting Cookies</td>
                        <td className="px-4 py-3 text-sm text-gray-700">These cookies may be set through our site by our advertising partners to build a profile of your interests and show you relevant content on other sites.</td>
                        <td className="px-4 py-3 text-sm text-gray-700">Up to 2 years</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Managing Your Cookies</h2>
                <p className="leading-relaxed mb-4">
                  Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><a href="https://www.allaboutcookies.org" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">www.allaboutcookies.org</a></li>
                  <li><a href="https://www.youronlinechoices.eu" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">www.youronlinechoices.eu</a> (for users in the EU)</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Browser-Specific Instructions</h3>
                <p className="leading-relaxed mb-4">
                  To opt out of being tracked by Google Analytics across all websites, visit:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><a href="https://tools.google.com/dlpage/gaoptout" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a></li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">More Information</h2>
                <p className="leading-relaxed mb-4">
                  Hopefully that has clarified things for you and as was previously mentioned if there is something that you aren't sure whether you need or not it's usually safer to leave cookies enabled in case it does interact with one of the features you use on our site.
                </p>
                <p className="leading-relaxed">
                  However if you are still looking for more information then you can contact us through one of our preferred contact methods:
                </p>
                <div className="bg-gray-50 p-4 rounded border border-gray-200 mt-4">
                  <p className="font-semibold text-gray-900">Hans Steel Canada</p>
                  <p className="text-gray-700">{COMPANY_ADDRESS}</p>
                  <p className="text-gray-700 mt-2">Email: info@hanssteel.com</p>
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default CookiePolicy
