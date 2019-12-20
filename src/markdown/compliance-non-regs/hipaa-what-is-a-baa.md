---
title: "What is a HIPAA BAA? | Aptible HIPAA Compliance Guide for Startups"
displayTitle: "What is a HIPAA BAA?"
description: "At Aptible, we get a lot of questions about HIPAA business associate agreements, or \"BAAs.\" This post will explain some of the essential concepts that cloud-hosted software development organizations should know about BAAs."
slug: /hipaa/what-is-a-baa/
template: compliance/hipaa
---

At Aptible, we get a lot of questions about HIPAA business associate agreements, or "BAAs." This post will explain some of the essential concepts that cloud-hosted software development organizations should know about BAAs.

For a broader overview of HIPAA, see our post on [common HIPAA questions](/resources/common-hipaa-questions/).

_One caveat, as always: This post is for informational purposes only. Aptible is not a law firm, and this post is not legal advice. You should contact an attorney to obtain advice with respect to particular issues or problems, including contracts and BAAs._

# Table of Contents
1. [What is a BAA?](#what-is-a-baa)
2. [What (or who?) is a Business Associate?](#what-or-who-is-a-business-associate)
    - [What does it mean to handle PHI "on behalf of" another entity?](#what-does-it-mean-to-handle-phi-on-behalf-of-another-entity)
    - [Do employees need to sign a BAA?](#do-employees-need-to-sign-a-baa)
    - [Do contractors need to sign a BAA?](#do-contractors-need-to-sign-a-baa)
3. [When is a BAA required?](#when-is-a-baa-required)
4. [What does the BAA requirement mean for choosing our stack?](#what-does-the-baa-requirement-mean-for-choosing-our-stack)
5. [What if a vendor signs a BAA, but I don't think they're really compliant?](#what-if-a-vendor-signs-a-baa-but-i-dont-think-theyre-really-compliant)
6. [What needs to be in a BAA?](#what-needs-to-be-in-a-baa)
7. [What are other common terms to find in a BAA?](#what-are-other-common-terms-to-find-in-a-baa)
8. [What shouldn't be in a BAA?](#what-shouldnt-be-in-a-baa)
9. [Example BAAs](#example-baas)

<span id="what-is-a-baa"></span>
### What is a BAA?
"BAA" is an acronym for "business associate agreement," which is an industry term for what the HIPAA regulations call a "business associate contract." Same thing.

BAAs are hybrid contractual and regulatory instruments, meaning they both satisfy HIPAA regulatory requirements *and* create liability between the parties.

Like most contracts, if one party violates the agreement, the other party may have remedies. Unlike most contracts, if a BAA isn't in place, isn't complete, or is violated, both parties may be in trouble with the federal government.

<span id="what-or-who-is-a-business-associate"></span>
### What (or who?) is a Business Associate?
Check out that post on [common HIPAA questions](/resources/common-hipaa-questions/). The most common type of business associate is a person or organization that creates, receives, transmits, or maintains protected health information (PHI) "on behalf of" a covered entity or another business associate.

The regulations are more nuanced, but in the real world, if you handle identifiable patient data for *any* reason, most covered entities (healthcare providers, insurance companies, pharmacies, self-ensured employers, etc.) will consider you to be a business associate and make you sign a BAA.

<span id="what-does-it-mean-to-handle-phi-on-behalf-of-another-entity"></span>
##### What does it mean to handle PHI "on behalf of" another entity?
Good question. HHS hasn't actually told us directly. It probably means the other entity (a covered entity or another business associate) either pays you or directs you in handling PHI.

For two examples of HHS interpreting what it means to handle PHI "on behalf of" an entity for purposes of determining whether a business associate relationship exists, see [page 5572 of the final HIPAA Omnibus rule][0] and HHS's [recent guidance on when digital health app developers may be business associates][2].

<span id="do-employees-need-to-sign-a-baa"></span>
##### Do employees need to sign a BAA?
No, members of your workforce are not your business associates, but you are responsible for supervising their access to PHI and training them on security and privacy practices. Your "workforce" includes paid employees, but also volunteers, trainees, temporary staff, and anyone else under your direct control.

<span id="do-contractors-need-to-sign-a-baa"></span>
##### Do contractors need to sign a BAA?
Probably. Most of the time independent contractors and consultants will not be under your direct control and should be treated as business associates, meaning they need to be prepared to comply fully with HIPAA, including signing a BAA and accepting liability for compliance.

<span id="when-is-a-baa-required"></span>
### When is a BAA required?
Any time a business associate relationship exists between two parties, they are required to execute a BAA. (Note that a BAA doesn't need to be a standalone agreement. The required provisions be can incorporated into terms of service, master service agreements, data security agreements, etc.)

There are two kinds of business associate relationships:

1. Between a covered entity and a business associate; and
2. Between a business associate and a subcontractor business associate.

BAAs work like a chain: A covered entity customer of yours is not required to have a BAA with your subcontractor.

For example, if you sell SaaS that handles PHI to a large self-insured employer (a covered entity) and host your services on Aptible:

1. You are a business associate of the employer,
2. Aptible is your business associate, and
3. AWS is Aptible's business associate, but
4. Neither you nor your customer are required to have a BAA with AWS unless you also use AWS directly.

<span id="what-does-the-baa-requirement-mean-for-choosing-our-stack"></span>
### What does the BAA requirement mean for choosing our stack?
In addition to Aptible or another hosting provider, you probably use a range of third-party app and workflow services to build your products and run your business. For example, you might want to use Twilio for sending SMS, Mailgun for transactional email, Mixpanel for analytics, AWS RDS for your database, Papertrail for logging, Slack for internal communication, Gmail for email, etc. Some of those providers will sign BAAs, others will not.

**Be careful to not have any vendor create, receive, transmit, or maintain PHI on your behalf without a BAA in place.**

If they don't sign a BAA, keep PHI out of their service.

You might be tempted to use a service with PHI anyways, or look the other way. Don't do that. HHS just hit a healthcare system with a [$1.55 million fine settlement for failure to execute a BAA with a vendor](http://www.hhs.gov/hipaa/for-professionals/compliance-enforcement/agreements/north-memorial-health-care/index.html). Last year, HHS fined another covered entity [$218,400, in part for using an Internet-based document sharing application](http://www.hhs.gov/hipaa/for-professionals/compliance-enforcement/examples/semc/index.html) (think Dropbox or Google Drive) for PHI without a BAA.

So if you want to use service with PHI but can't find a vendor who will sign a BAA, you may have to build that service yourself. Ugh.

In that case, self-hosting an open-source service on a private stack using Docker containers is becoming a popular choice. Among Aptible customers, [Sentry](https://github.com/aptible/docker-sentry) for error monitoring and [Elasticsearch](https://github.com/aptible/docker-elasticsearch) + [Kibana](https://github.com/aptible/docker-kibana) for logging are two common setups. [All of our open-source Docker images](https://github.com/aptible?query=docker-) are designed for portability to private environments.

<span id="what-if-a-vendor-signs-a-baa-but-i-dont-think-theyre-really-compliant"></span>
### What if a vendor signs a BAA, but I don't think they're really compliant?
Tell them to GTFO.

Some version of the following conversation happens on a fairly regular basis:

> Customer: I want to spend $MONEY on your service. Are you HIPAA-compliant?
>
> Shady Vendor: Yes! Of course! We have all the HIPAAs.
>
> Customer: Will you sign a BAA?
>
> SV: Yes! Of course!
>
> Customer: [amazed at how easy that was]
>
> SV: ... so, what's a BAA?

If you know that a business associate of yours has materially breached a BAA, the HIPAA regulations say you must correct it or terminate the BAA. If you don't, you could be on the hook for the vendor's non-compliance. And it makes HHS very angry when entities ignore the HIPAA rules on purpose.

That said, HIPAA does not require that you police your vendors. When they handle PHI for you, they become directly liable for compliance and are subject to penalties and enforcement on their own.

<span id="what-needs-to-be-in-a-baa"></span>
### What needs to be in a BAA?
The full requirements are in the text of the regulations. HHS publishes an ["Administrative Simplification"](http://www.hhs.gov/sites/default/files/hipaa-simplification-201303.pdf) that presents all the HIPAA regulatory standards in one document. Look at §§ 164.314 (p. 67) and 164.504 (p. 81) in particular.

HHS also publishes [summary BAA guidance][1] with a list of the 10 topics that BAAs must address and sample provisions - definitely recommended reading.

In very brief summary, the main requirements for a BAA are to:

- Whitelist the permitted uses and disclosures of PHI. Anything not in the whitelist is not allowed. Subcontractor use and disclosure must comply with the whitelist.
- Recite things you have to do anyways under the regulations (comply with the Security Rule, report non-whitelisted uses and disclosures, obey HHS). Because it's a contract, failure to comply means you may breach the BAA, in addition to potentially being in trouble with HHS.
- Allow the upstream entity to terminate the BAA if the downstream business associate violates a material term of the BAA. Often the underlying contract is conditioned on a BAA being in place, which means you're fired.
- Address data lifecycle events such as amendments to PHI, requests by patients for their PHI, return or destruction of PHI at the end of the BAA, and logging when you disclose PHI to a third party.

Remember that signing a BAA and complying with HIPAA are different. The majority of HIPAA requirements are not memorialized in BAAs, but they still apply.

<span id="what-are-other-common-terms-to-find-in-a-baa"></span>
### What are other common terms to find in a BAA?

- Restrictions on how to use or configure the services provided. For example, we require Aptible customers to force SSL/TLS for their apps.
- Modifications to the default HIPAA incident reporting rules. HIPAA requires business associates to report "security incidents" upstream, but the definition of that term is overly broad, and can be construed to include pings, port scans, isolated unsuccessful logon attempts, etc. The Internet is a noisy place. Don't accidentally agree to report those kinds of low-level "incidents" on a case-by-case basis, or on a rolling timeline. Aggregate reporting or giving notice in the BAA itself is a more sane choice.
- Modifications to the breach reporting window. Business associates always need to notify covered entities of breaches "without unreasonable delay and in no case later than 60 calendar days after discovery of a breach." Most covered entities want a shorter hard stop.
- Breach indemnification provisions. Indemnification is complex enough to be a separate blog post. tl;dr: Make sure you're only on the hook for things that are actually your fault - where your action or omission was negligent or intentional. Liability caps for regulatory breaches are uncommon.
- Breach insurance requirements. Usually at least $2M for cyber. This sometimes goes in the main contract.
- Specific security obligations of the downstream entity. Usually these are incorporated into the main contract or an appendix, and accompanied by a vendor security audit.

<span id="what-shouldnt-be-in-a-baa"></span>
### What shouldn't be in a BAA?

##### Strict inheritance of all BAA terms by subcontractors
Part of the Privacy Rule says that subcontractors business associates must "agree to the same restrictions and conditions that apply to the business associate with respect to such information."

Some entities misunderstand this to mean that _all_ provisions of _all_ BAAs down the chain must be identical, including custom security controls. This is wrong and unnecessary.

The intent of the rule is to make sure a business associate can't end-run _privacy_ restrictions by contracting out to a third party. If the business associate isn't allowed to perform a use or disclosure, their subcontractors aren't either.

Security is a separate matter. The Security Rule has its own set of organizational requirements, which do not include strict inheritance of controls. That makes sense in light of the Security Rule's emphasis on flexibility and application of controls that are "reasonable and appropriate" to each entity.

##### Unrealistic breach reporting timelines
It is fairly common for covered entities to push for very short breach reporting triggers and timelines. Sometimes this is driven by the mistaken belief that the covered entity has 60 days from the time of the first discovery of the breach _by anyone_ to complete its Breach Notification Rule obligations.

Breach reporting runs in serial, not parallel. (See [page 5655 of the final HIPAA Omnibus rule][0]).

Don't agree to report breaches "within $X days" of the breach. You can't - odds are you may not even know there was a breach by then. Use the "known or should have known" threshold in the Breach Notification Rule.

##### Requiring subcontractors to be legal agents
An "agent," in the legal sense, is someone who acts as you. For the purposes of breach notification, an agent's discovery of a breach is imputed to you, as are the legal consequences of their actions. Almost every subcontractor or vendor agreement expressly disclaims an agency relationship between the parties. A BAA that requires all of your subcontractors to be your agents is unnecessary, dangerous, and probably impossible to comply with.

##### Unlimited liability
Always talk with an attorney to understand your potential liability. Liability and indemnification provisions may appear both in your underlying contract and your BAA - make sure you understand how they work together, and which terms control in the event of a conflict. For startups, contracts with no limitations on liability will make you toxic to potential acquirers.

Liability has both breadth and depth. Breadth, or scope, means the types of damages that you might be liable for. In general, you should only accept certain types of liability. Unlimited liability means that, in addition to any breach indemnification, your customers could also potentially sue you for loss of business, loss of reputation, and other consequential damages. It is common to exclude those types of liability.

Depth refers to how much you might potentially be liable for. Another way to limit liability is through a total dollar cap. This is common for general liability (i.e., if you don't hold up your end of the underlying contract), but uncommon for breaches, where the normal practice is uncapped indemnification. This isn't as bad as it sounds because the types and amounts of costs involved in breach response are somewhat predictable and insurable.

<span id="example-baas"></span>
### Example BAAs
1. BAA Template  [ [docx] [3] | [pdf] [4] ] - Adapted from [HHS's guidance on business associate contracts][1]. This example is written to be executed between a covered entity and a business associate, but can be adapted for use between a business associate and a subcontractor.
2. Aptible's BAA  [ [pdf] [5] ] - Our standard BAA, adapted for our specific use case and built to work with our [Terms of Service][6].

Feel free to incorporate parts of these examples into your own BAAs, but **always consult an attorney for specific legal advice.**

### Next Steps
If you have any questions about this post, or you'd like to chat about how to design and scale a HIPAA-compliant engineering organization in the cloud, feel free to [contact us](http://contact.aptible.com).

[0]: https://www.gpo.gov/fdsys/pkg/FR-2013-01-25/pdf/2013-01073.pdf
[1]: http://www.hhs.gov/hipaa/for-professionals/covered-entities/sample-business-associate-agreement-provisions/index.html
[2]: /assets/what-is-a-hipaa-baa/OCR-health-app-developer-scenarios-2-2016.pdf
[3]: /assets/what-is-a-hipaa-baa/aptible_baa_template.docx
[4]: /assets/what-is-a-hipaa-baa/aptible_baa_template.pdf
[5]: /assets/what-is-a-hipaa-baa/aptible_baa_20160317.pdf
[6]: /legal/terms_of_service.html

_Update - March 29, 2016: Added a table of contents._

_Update - October 29, 2016: Formatting edits._
