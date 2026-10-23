# Author: Jabulile Gamede

**PART 1: Management Levels & Information Flow**
![pyramid](images/pyramid.png)

**Tier 1:**

**Management Level:** Executive
**IS Type:** ESS
**Data Flow & Purpose:** The data is summarized for use in market trends, competitor analysis, forecats, KPI dashboards to support business decisions.

**Tier 2:**

**Management Level:** Tactical Management
**IS Type:** MIS and DSS
**Data Flow & Purpose:** Takes the data from tier 3, processes and summarized it into reports to support with medium-term planning in a business.

**Tier 3:**

**Management Level:** Operational
**IS Type:** TPS
**Data Flow & Purpose:** It handles the raw data to support with routine decisions and this is usually where data is created.


**PART 2:  Technical Architecture Definitions**


**1. IT Infrastructure Diagram: What does it show regarding physical assets?**
This diagram shows the physical reality. It maps servers, PCs, routers, switches, cables, data centers, and where they are physically located. It's like a floor plan for IT. It answers: what physical box is where, and how are they physically connected.

**2. IT Landscape Diagram: How does it differ by showing asset types at a logical level?**
This one doesn't care about the physical box, it cares about the logical systems. It shows asset types like Applications, Databases, Operating Systems, and how they logically depend on each other. For example, it will show that the POS Application depends on the MySQL Database and connects to the Payment Gateway API, regardless of which server they run on. It's a software view, not a hardware view.

**3. IT Architecture Diagram: What concepts, norms, and standards does it outline?**
This is the rulebook view. It doesn't show specific devices or apps, it shows the principles that all diagrams must follow. It outlines concepts like cloud-first, security norms like zero-trust, standards like all apps must use single sign-on, naming conventions, approved tech stack, network zones. It answers: how should we build things in this organization.
