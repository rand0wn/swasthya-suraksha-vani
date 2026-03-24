# Complete Guide to Building a Voice AI Knowledge Base for CM Mohan Yadav's MP Government Bot

**Citizens of Madhya Pradesh generate over 50,000 monthly calls** to CM Helpline 181, with electricity, urban services, and revenue issues dominating grievance volumes. This guide provides the complete blueprint for building a fast, effective knowledge base that can handle these queries through voice AI—covering all major schemes, services, portals, and administrative structures with actionable data ready for immediate implementation.

---

## Most common citizen queries drive 80% of helpline traffic

The CM Helpline 181 operates as MP's Integrated Public Grievance Redressal System (IPGRS), branded "Jan Hetu – Jan Setu," processing complaints across **50+ government departments** with defined resolution timelines of 7-30 days.

### Top grievance categories by volume

Based on October 2024 data, these departments receive the highest complaint volumes:

| Department | Monthly Complaints | Resolution Score |
|------------|-------------------|------------------|
| Urban Administration | 48,657 | 89.35% |
| Energy Department | 42,868 | 90.26% |
| Public Health & Family Welfare | High | Variable |
| Revenue Department | High | Variable |
| Panchayat & Rural Development | High | Variable |

**Bhopal receives the most complaints** (5,925/month) but has the poorest resolution rate at **86.38%**, while Jabalpur leads with **98.58%** resolution score.

### Query type breakdown for Voice AI design

The knowledge base must handle three distinct query patterns:

- **Information-seeking (45%)**: "What is the eligibility for Ladli Behna?" "How do I apply for ration card?"
- **Complaint registration (35%)**: "My electricity bill is wrong" "Road in my area needs repair"
- **Status checking (20%)**: "What is my application status?" "When will my payment come?"

### Most searched schemes in MP

| Rank | Scheme | Est. Monthly Searches |
|------|--------|----------------------|
| 1 | Ladli Behna Yojana | Very High |
| 2 | PM-KISAN / CM Kisan Kalyan | Very High |
| 3 | Ration Card Services | High |
| 4 | Ayushman Bharat | High |
| 5 | Land Records (Khasra/B1) | High |

---

## Women and family welfare schemes database

### Ladli Behna Yojana—MP's flagship scheme

**Current beneficiaries**: 1.28 crore women | **Total disbursed**: ₹44,000+ crore | **Monthly payment**: ₹1,500

#### Exact eligibility criteria

| Criteria | Requirement |
|----------|-------------|
| Age | 21-60 years |
| Marital Status | Married, widow, divorced, or abandoned |
| Residency | Permanent MP resident |
| Annual Family Income | Below ₹2,50,000 |
| Land Holding | Family owns ≤5 acres agricultural land |
| Tax Status | Family not income tax payers |
| Government Job | No family member in government employment |

#### Required documents

1. Samagra ID (Member ID) — **Mandatory**
2. Aadhaar Card linked to bank account
3. Bank passbook in applicant's name
4. Passport-size photograph
5. Address proof/Domicile certificate
6. Date of birth proof
7. Mobile number linked to Aadhaar

#### Application process (primarily offline)

1. Complete Aadhaar e-KYC on Samagra Portal (samagra.gov.in)
2. Visit nearest Gram Panchayat (rural) or Ward Office (urban)
3. Collect and fill application form
4. Submit with documents; live photograph taken
5. Receive acknowledgment slip with application number

**Payment dates**: Generally 1st-10th of each month via DBT | **Portal**: cmladlibahna.mp.gov.in | **Helpline**: 181

#### Common rejection reasons

- Age outside 21-60 range
- Family income exceeds ₹2.5 lakh
- Family member is income taxpayer or government employee
- Aadhaar not linked with bank account
- e-KYC not completed on Samagra Portal

### Ladli Lakshmi Yojana—for girl children

**Total benefit**: ₹1,18,000 over girl child's life | **Beneficiaries**: 51+ lakh girls

| Milestone | Amount |
|-----------|--------|
| Registration (5 years) | ₹6,000/year × 5 = ₹30,000 |
| Class 6 admission | ₹2,000 |
| Class 9 admission | ₹4,000 |
| Class 11-12 admission | ₹6,000 each |
| Graduation | ₹25,000 |
| Age 21 (final payment) | ₹1,00,000 |

**Eligibility**: Parents must be MP natives, not income taxpayers, registered at Anganwadi, family planning adopted after second child. **Portal**: ladlilaxmi.mp.gov.in

### Mukhyamantri Kanya Vivah Yojana

**Benefit**: ₹51,000-55,000 for BPL family marriages | **Eligibility**: Girl 18+, groom 21+, BPL family, Samagra registered

**Portal**: mpvivahportal.nic.in | Benefits through Samuhik Vivah (mass marriage) programs

### Pension schemes for women

| Scheme | Amount | Eligibility |
|--------|--------|-------------|
| Kalyani (Widow) Pension | ₹600/month | Widows 18-79 years |
| IG National Widow Pension | ₹600/month | BPL widows 40-79 years |
| Avivahita (Unmarried) Pension | Monthly pension | Unmarried women 50+ |

**Portal**: socialsecurity.mp.gov.in

---

## Complete farmer welfare schemes database

### CM Kisan Kalyan Yojana + PM-KISAN

**Combined annual benefit**: ₹10,000 (₹6,000 central + ₹4,000 state) | **Beneficiaries**: ~80 lakh farmers

| Component | Amount | Installments |
|-----------|--------|--------------|
| PM-KISAN (Central) | ₹6,000/year | 3 × ₹2,000 every 4 months |
| CM Kisan Kalyan (State) | ₹4,000/year | 2 × ₹2,000 every 6 months |

**Eligibility**: PM-KISAN beneficiaries automatically eligible; must be small/marginal farmers, MP residents, not income taxpayers

**Ineligible**: Institutional landholders, constitutional post holders, government employees, professionals (doctors, engineers, lawyers), pensioners receiving >₹10,000/month

**Portal**: saara.mp.gov.in | **Helpline**: 1800-180-1551

### Bhavantar Bhugtan Yojana—price deficiency payments

**How it works**: Government pays difference when market price falls below MSP

**Crops covered**: Soybean, maize, moong, urad, groundnut, arhar, til, ramtil, jowar, bajra

**2025-26 Soybean MSP**: ₹5,328/quintal | **Registration**: mpeuparjan.nic.in

### PM Fasal Bima Yojana

| Season | Farmer Premium |
|--------|---------------|
| Kharif | 2% of sum insured |
| Rabi | 1.5% of sum insured |
| Commercial/Horticulture | 5% of sum insured |

**Portal**: pmfby.gov.in | **Helpline**: 14447

### Solar pump subsidy (CM Solar Pump Yojana)

**Subsidy**: Up to 90% for temporary connection holders (farmer pays only 10%)

**Eligibility**: Farmers without electricity connection, farms >300m from power line, priority for water-rich areas

**Portal**: cmsolarpump.mp.gov.in

### E-Uparjan (MSP procurement) process

1. Register at mpeuparjan.nic.in with Samagra ID
2. After approval, book selling slot
3. Receive SMS with date and center
4. Visit with Aadhaar, bank passbook, Patwari certificate
5. Payment credited within 7 working days

**Rabi 2025-26 registration**: January 20 - April 9, 2025

---

## Housing, education, and health schemes

### PM Awas Yojana implementation in MP

#### PMAY-Gramin (Rural)

**Benefit**: ₹1,20,000 (plain areas) / ₹1,30,000 (hilly areas) | **Eligibility**: SECC 2011 data, no pucca house anywhere in India

**Priority**: BPL families, SC/ST, widows, differently-abled, landless laborers, manual scavengers

**Portal**: pmayg.nic.in | **MP Portal**: pmayg.mp.gov.in

#### PMAY-Urban (Urban)

| Category | Income Limit | Max Subsidy |
|----------|-------------|-------------|
| EWS | Up to ₹3 lakh | ₹2.5-2.67 lakh |
| LIG | ₹3-6 lakh | ₹2.67 lakh |
| MIG-I | ₹6-12 lakh | ₹2.35 lakh |
| MIG-II | ₹12-18 lakh | ₹2.30 lakh |

**Portal**: pmaymis.gov.in

### Scholarship schemes

| Scheme | Eligibility | Benefit |
|--------|-------------|---------|
| Post-Matric SC/ST | Income ≤₹6 lakh | Full fees + maintenance |
| Post-Matric OBC | Income ≤₹3 lakh | Full fees |
| Gaon Ki Beti | Rural girls, 60%+ in 12th | ₹500/month |
| Pratibha Kiran | Urban BPL girls, 60%+ in 12th | ₹500/month |
| MMVY (Medhavi Vidyarthi) | 70%+ MP Board, income ≤₹6 lakh | Full tuition fees |

**Portals**: scholarshipportal.mp.nic.in | medhavikalyan.mp.gov.in | hescholarship.mp.gov.in

### Mukhyamantri Seekho Kamao Yojana—skill development

**Age**: 18-29 years | **Eligibility**: 12th pass/ITI/Diploma/Graduate

| Qualification | Monthly Stipend |
|---------------|----------------|
| 12th Pass | ₹8,000 |
| ITI Pass | ₹8,500 |
| Diploma | ₹9,000 |
| Graduate+ | ₹10,000 |

**Portal**: mmsky.mp.gov.in

### Ayushman Bharat in MP

**Coverage**: ₹5 lakh/family/year | **Covered**: 1,900+ procedures, pre/post hospitalization

**Eligibility**: SECC 2011 criteria (rural: kutcha house, no adult 16-59, SC/ST households; urban: rag pickers, domestic workers, construction workers, etc.) | **New**: All citizens 70+ now eligible

**Get card**: Visit CSC center with Aadhaar and ration card, or apply via setu.pmjay.gov.in

**Portal**: ayushmanbharat.mp.gov.in | **Helpline**: 14555

---

## Social security and employment database

### Pension schemes

| Pension Type | Amount | Age | Additional Criteria |
|--------------|--------|-----|---------------------|
| Old Age (IGNOAPS) | ₹600/month | 60+ | BPL |
| Widow (Kalyani) | ₹600/month | 18+ | BPL + husband's death certificate |
| Disability (IGNDPS) | ₹600/month | 18+ | 40%+ disability certificate |

**Portal**: socialsecurity.mp.gov.in

### Sambal Yojana 2.0—unorganized workers

**Benefits for registered workers**:

| Benefit | Amount |
|---------|--------|
| Accidental Death | ₹4,00,000 |
| Natural Death | ₹2,00,000 |
| Permanent Disability | ₹2,00,000 |
| Partial Disability | ₹1,00,000 |
| Funeral Assistance | ₹5,000 |
| Maternity Benefit | ₹16,000 |

**Registration**: sambal.mp.gov.in | **Helpline**: 0755-2573036

### Government job portals

| Portal | URL | Purpose |
|--------|-----|---------|
| MP Rojgar | mprojgar.gov.in | Employment registration |
| MPPEB/Vyapam | peb.mp.gov.in | Recruitment exams |
| MPOnline Chayan | chayan.mponline.gov.in | Departmental recruitment |
| MPPSC | mppsc.mp.gov.in | State services exam |

**MPPEB Helpline**: 18002337899

### Self-employment schemes

**Mukhyamantri Yuva Udyami Yojana**: Loans ₹10 lakh - ₹2 crore | Margin money 15-20% | Interest subsidy 5-6%

**MUDRA Loans**: Shishu (up to ₹50K), Kishore (₹50K-5L), Tarun (₹5L-10L), Tarun Plus (up to ₹20L)

**Portal**: msme.mponline.gov.in | udyamimitra.in

---

## Essential government services with complete processes

### Ration card services

**Types**: APL (Yellow), BPL (Pink), AAY/Antyodaya (Red)

**Required documents**: Samagra ID (mandatory), Aadhaar of all members, residence proof, income certificate, LPG connection details

**Portal**: rationmitra.nic.in | csmsmpscsc.mp.gov.in/rationmitra/

### Certificate services (e-District)

| Certificate | Fee | Timeline | Validity |
|-------------|-----|----------|----------|
| Domicile | ₹20 (free online) | 7 days | Lifetime |
| Caste (SC/ST/OBC) | Free | 7-15 days | Lifetime |
| Income | Free | 7 days | 3 years |

**Portal**: mpedistrict.gov.in | **Helpline**: 1800-233-7887

### Land records

**Free services** (no login): Khasra/Khatauni view, Bhu-Naksha (land map), search by owner name

**Paid services**: Certified copies, B1 Extract, mutation

**How to get Khasra**: Visit mpbhulekh.gov.in → Bhu-Abhilekh → Enter District/Tehsil/Village → Search by Khasra number or owner name

**Mutation (Namantaran)**: Apply via MP Bhulekh portal with sale deed and required documents

**Portals**: mpbhulekh.gov.in | saara.mp.gov.in | **Helpline**: 18002030311

### Police services

**Online FIR**: citizen.mppolice.gov.in (for petty theft, vehicle theft, cyber fraud)

**Tenant verification**: Mandatory for landlords via Citizen Portal

**Helpline**: 100 (emergency) | 0755-3501600 (citizen services)

---

## Complete MP government portals directory

### Core citizen portals

| Portal | URL | Purpose |
|--------|-----|---------|
| **Samagra** | samagra.gov.in | Unified citizen ID, welfare delivery |
| **CM Helpline** | cmhelpline.mp.gov.in | Grievance redressal |
| **MP Online** | mponline.gov.in | 200+ G2C services |
| **e-District** | mpedistrict.gov.in | Certificates |
| **MP Bhulekh** | mpbhulekh.gov.in | Land records |
| **MP Police Citizen** | citizen.mppolice.gov.in | FIR, verification |
| **eNagar Palika** | mpenagarpalika.gov.in | Urban services |
| **RTI Portal** | rti.mp.gov.in | Information requests |

### Scheme-specific portals

| Scheme | Portal |
|--------|--------|
| Ladli Behna | cmladlibahna.mp.gov.in |
| Ladli Lakshmi | ladlilaxmi.mp.gov.in |
| Kisan Kalyan | saara.mp.gov.in |
| E-Uparjan (MSP) | mpeuparjan.nic.in |
| Solar Pump | cmsolarpump.mp.gov.in |
| Scholarships | scholarshipportal.mp.nic.in |
| Sambal | sambal.mp.gov.in |
| Seekho Kamao | mmsky.mp.gov.in |
| Ayushman Bharat | ayushmanbharat.mp.gov.in |
| Housing (Rural) | pmayg.mp.gov.in |

### Samagra Portal—the foundation

**What it is**: 8-digit Family ID + 9-digit Member ID for each citizen

**Required for**: Ration card, scholarships, pensions, Ladli Behna, all welfare schemes

**Registration**: samagra.gov.in → Register Family → OTP verification → Fill details → Receive IDs

**e-KYC**: Must complete Aadhaar linking for scheme benefits

---

## Administrative structure and contacts

### MP's 55 districts across 10 divisions

| Division | Key Districts |
|----------|---------------|
| Bhopal | Bhopal, Vidisha, Raisen, Sehore, Rajgarh |
| Indore | Indore, Dhar, Khandwa, Khargone, Burhanpur |
| Jabalpur | Jabalpur, Katni, Chhindwara, Seoni, Mandla |
| Gwalior | Gwalior, Guna, Shivpuri, Datia |
| Ujjain | Ujjain, Dewas, Ratlam, Mandsaur, Neemuch |

**Total tehsils**: 428 | **Total blocks**: ~313 | **Gram Panchayats**: ~23,000

### Emergency and helpline numbers

| Service | Number |
|---------|--------|
| Universal Emergency | 112 |
| Police | 100 |
| Ambulance | 108 |
| Fire | 101 |
| CM Helpline | 181 |
| Women Helpline | 1091 |
| Child Helpline | 1098 |
| Electricity | 1912 |
| Water Supply | 155343 |
| Ayushman Bharat | 14555 |
| Senior Citizen | 14567 |

### Key government contacts

**CM Office**: 0755-2441581, 2441033 | Email: cm@mp.nic.in

**Chief Secretary**: 0755-2441370 (Vallabh Bhawan, Bhopal)

**Find district contacts**: Visit [districtname].nic.in (e.g., bhopal.nic.in, indore.nic.in)

---

## Technical approach to building the KB fast

### Recommended technology stack

| Component | Tool | Rationale |
|-----------|------|-----------|
| Web scraping | BeautifulSoup + Selenium | Handles static and dynamic govt pages |
| PDF extraction | PyMuPDF (digital) + EasyOCR (scanned) | Best Hindi support |
| Vector database | Chroma (dev) / Qdrant (prod) | Cost-effective, good filtering |
| Embeddings | Cohere embed-multilingual-v3.0 | Excellent Hindi support |
| Chunking | 300-500 tokens, 15% overlap | Optimal for scheme content |

### Schema template for schemes

```json
{
  "scheme_id": "LADLI-BEHNA-001",
  "scheme_name": {"en": "Ladli Behna Yojana", "hi": "लाड़ली बहना योजना"},
  "category": "women_welfare",
  "eligibility": {
    "age": "21-60 years",
    "income_limit": "₹2.5 lakh/year",
    "documents": ["Samagra ID", "Aadhaar", "Bank passbook"]
  },
  "benefits": {"amount": "₹1,500/month", "mode": "DBT"},
  "application": {"mode": "offline", "where": "Gram Panchayat/Ward Office"},
  "contacts": {"helpline": "181", "portal": "cmladlibahna.mp.gov.in"},
  "faqs": [{"q": "When is payment date?", "a": "1st-10th of each month"}]
}
```

### Voice AI response optimization

**Ideal response**: 50-100 words (15-30 seconds spoken)

**Structure each chunk with**:
- `short_answer`: 1-2 sentence summary
- `detailed_answer`: Full explanation
- `follow_up_prompts`: "Would you like to know eligibility?" / "Should I explain the process?"

### Week 1 vs Month 1 vs Month 3 priorities

#### Week 1 (handles ~80% queries)

1. **Ladli Behna Yojana** complete database
2. **PM-KISAN + CM Kisan Kalyan** combined
3. **Ration card** application/correction process
4. **Samagra ID** registration and e-KYC
5. **CM Helpline 181** complaint process
6. **Top 10 helpline numbers**
7. **Certificate processes** (domicile, caste, income)

#### Month 1

- All women schemes (Ladli Lakshmi, Kanya Vivah, pensions)
- All farmer schemes (Bhavantar, solar pump, crop insurance)
- Housing schemes (PMAY-G, PMAY-U)
- Land records processes
- Electricity complaint handling
- All 55 districts basic info

#### Month 3

- Complete scholarship database
- Employment schemes (Seekho Kamao, MSME support)
- Health schemes (Ayushman, hospitals)
- Police services
- Full FAQs for all schemes
- Regional language variations

### Quality assurance checklist

**Before launch**:
- ✅ All data from official government sources
- ✅ Hindi translations verified
- ✅ Contact numbers tested
- ✅ URLs validated
- ✅ Amounts and dates current
- ✅ Voice responses under 100 words
- ✅ Follow-up prompts clear

**Ongoing**:
- Weekly: Review failed queries, update scheme changes
- Monthly: Verify contact numbers, check portal URLs
- Quarterly: Full content refresh, performance audit

### Keeping the KB updated

**Monitor these sources**:
- PIB MP releases (pib.gov.in)
- CM Office announcements (@CMMadhyaPradesh)
- Individual scheme portal news sections
- State budget announcements

**Update triggers**: Payment date changes, eligibility updates, new scheme launches, helpline changes

---

## Quick reference for immediate implementation

### 20% content that handles 80% queries

| Content Area | Query Volume | Build Priority |
|--------------|--------------|----------------|
| Ladli Behna eligibility + status | Very High | Day 1 |
| PM-KISAN payment dates | Very High | Day 1 |
| Samagra ID registration | Very High | Day 1 |
| Ration card processes | High | Day 2 |
| CM Helpline 181 process | High | Day 2 |
| Certificate processes | High | Day 3 |
| Land records (Khasra/B1) | High | Day 3 |
| Emergency numbers | Medium | Day 1 |
| Electricity complaints | Medium | Day 4 |
| Pension schemes | Medium | Day 4 |

### Essential knowledge base structure

```
/schemes
  /women (Ladli Behna, Ladli Lakshmi, Kanya Vivah)
  /farmers (PM-KISAN, Kisan Kalyan, Bhavantar, Solar)
  /housing (PMAY-G, PMAY-U)
  /education (Scholarships, RTE, Seekho Kamao)
  /health (Ayushman, Janani Express)
  /social_security (Pensions, Sambal)
/services
  /certificates (Domicile, Caste, Income)
  /ration_card
  /land_records
  /electricity
  /police
/contacts
  /emergency_numbers
  /department_helplines
  /district_collectors
/administrative
  /districts (55 districts info)
  /tehsils
  /panchayats
```

This comprehensive guide provides all the practical, actionable information needed to build a fast, effective Voice AI knowledge base for MP citizens. The prioritization framework ensures maximum impact with minimum initial effort, while the complete scheme databases and portal directory enable accurate, helpful responses to the vast majority of citizen queries.
