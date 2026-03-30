/* ============================================================
   CRS-PDVS — Mock Data Module
   
   Centralized, realistic mock data structures for:
   - Pensioners
   - Verification sessions
   - Admin roles and users
   - Analytics / dashboard metrics
   - Support cases
   - Audit logs
   
   All data uses realistic Cross River State context:
   LGAs, pensioner names, pension categories, timestamps.
   ============================================================ */

window.CRS_PDVS_DATA = (() => {

  // ===========================================================
  // Cross River State Local Government Areas
  // ===========================================================
  const LGAs = [
    'Calabar Municipality',
    'Calabar South',
    'Akamkpa',
    'Akpabuyo',
    'Bakassi',
    'Biase',
    'Bekwarra',
    'Boki',
    'Abi',
    'Ikom',
    'Obanliku',
    'Obubra',
    'Obudu',
    'Odukpani',
    'Ogoja',
    'Yakurr',
    'Yala',
    'Etung'
  ];

  // ===========================================================
  // Pension Categories
  // ===========================================================
  const pensionCategories = [
    'Civil Service Retiree',
    'Teaching Service Retiree',
    'Local Government Retiree',
    'Judicial Service Retiree',
    'Health Service Retiree',
    'Parastatal Retiree'
  ];

  // ===========================================================
  // Verification Statuses
  // ===========================================================
  const verificationStatuses = [
    'Verified',
    'Pending Review',
    'Failed',
    'Referred to Support Center',
    'Awaiting Verification',
    'Expired'
  ];

  // ===========================================================
  // Pensioners — Realistic mock records
  // ===========================================================
  const pensioners = [
    {
      id: 'CRS-PEN-2024-0001',
      firstName: 'Margaret',
      lastName: 'Effiom',
      dateOfBirth: '1955-03-12',
      gender: 'Female',
      phone: '0801****678',
      phoneRaw: '08012345678',
      email: 'm.effiom@email.com',
      lga: 'Calabar Municipality',
      category: 'Civil Service Retiree',
      retirementDate: '2018-06-30',
      pensionAmount: 68500,
      bankName: 'First Bank of Nigeria',
      accountLast4: '4821',
      photoUrl: null,
      status: 'Active',
      lastVerified: '2025-12-15T10:24:00',
      nextVerificationDue: '2026-06-15',
      verificationCount: 5,
      onboardedDate: '2023-08-10'
    },
    {
      id: 'CRS-PEN-2024-0002',
      firstName: 'Emmanuel',
      lastName: 'Agbo',
      dateOfBirth: '1958-07-22',
      gender: 'Male',
      phone: '0705****913',
      phoneRaw: '07053889913',
      email: null,
      lga: 'Ogoja',
      category: 'Teaching Service Retiree',
      retirementDate: '2020-12-31',
      pensionAmount: 52300,
      bankName: 'United Bank for Africa',
      accountLast4: '7209',
      photoUrl: null,
      status: 'Active',
      lastVerified: '2026-01-08T09:15:00',
      nextVerificationDue: '2026-07-08',
      verificationCount: 3,
      onboardedDate: '2024-01-15'
    },
    {
      id: 'CRS-PEN-2024-0003',
      firstName: 'Grace',
      lastName: 'Okon',
      dateOfBirth: '1952-11-05',
      gender: 'Female',
      phone: '0816****445',
      phoneRaw: '08167234445',
      email: 'grace.okon@email.com',
      lga: 'Calabar South',
      category: 'Health Service Retiree',
      retirementDate: '2015-03-31',
      pensionAmount: 74200,
      bankName: 'Access Bank',
      accountLast4: '3156',
      photoUrl: null,
      status: 'Active',
      lastVerified: '2025-11-20T14:45:00',
      nextVerificationDue: '2026-05-20',
      verificationCount: 8,
      onboardedDate: '2023-06-20'
    },
    {
      id: 'CRS-PEN-2024-0004',
      firstName: 'Patrick',
      lastName: 'Ushie',
      dateOfBirth: '1960-01-18',
      gender: 'Male',
      phone: '0902****118',
      phoneRaw: '09023456118',
      email: null,
      lga: 'Ikom',
      category: 'Local Government Retiree',
      retirementDate: '2022-09-30',
      pensionAmount: 45800,
      bankName: 'Zenith Bank',
      accountLast4: '9087',
      photoUrl: null,
      status: 'Pending Review',
      lastVerified: null,
      nextVerificationDue: '2026-04-01',
      verificationCount: 0,
      onboardedDate: '2025-11-05'
    },
    {
      id: 'CRS-PEN-2024-0005',
      firstName: 'Felicia',
      lastName: 'Bassey',
      dateOfBirth: '1953-09-30',
      gender: 'Female',
      phone: '0813****902',
      phoneRaw: '08133216902',
      email: 'fbassey53@email.com',
      lga: 'Akamkpa',
      category: 'Judicial Service Retiree',
      retirementDate: '2016-12-31',
      pensionAmount: 89100,
      bankName: 'Guaranty Trust Bank',
      accountLast4: '5634',
      photoUrl: null,
      status: 'Active',
      lastVerified: '2026-02-03T11:30:00',
      nextVerificationDue: '2026-08-03',
      verificationCount: 6,
      onboardedDate: '2023-09-02'
    },
    {
      id: 'CRS-PEN-2024-0006',
      firstName: 'Joseph',
      lastName: 'Adie',
      dateOfBirth: '1957-06-14',
      gender: 'Male',
      phone: '0703****367',
      phoneRaw: '07038801367',
      email: null,
      lga: 'Obubra',
      category: 'Civil Service Retiree',
      retirementDate: '2019-06-30',
      pensionAmount: 61400,
      bankName: 'Fidelity Bank',
      accountLast4: '2098',
      photoUrl: null,
      status: 'Active',
      lastVerified: '2025-10-12T08:55:00',
      nextVerificationDue: '2026-04-12',
      verificationCount: 4,
      onboardedDate: '2024-03-18'
    },
    {
      id: 'CRS-PEN-2024-0007',
      firstName: 'Rose',
      lastName: 'Etim',
      dateOfBirth: '1949-04-20',
      gender: 'Female',
      phone: '0805****221',
      phoneRaw: '08051190221',
      email: null,
      lga: 'Odukpani',
      category: 'Teaching Service Retiree',
      retirementDate: '2012-12-31',
      pensionAmount: 55600,
      bankName: 'Union Bank',
      accountLast4: '8412',
      photoUrl: null,
      status: 'Inactive',
      lastVerified: '2025-06-01T10:10:00',
      nextVerificationDue: '2025-12-01',
      verificationCount: 10,
      onboardedDate: '2023-05-11'
    },
    {
      id: 'CRS-PEN-2024-0008',
      firstName: 'Daniel',
      lastName: 'Okoi',
      dateOfBirth: '1956-12-08',
      gender: 'Male',
      phone: '0810****556',
      phoneRaw: '08107783556',
      email: 'd.okoi@email.com',
      lga: 'Yakurr',
      category: 'Parastatal Retiree',
      retirementDate: '2021-03-31',
      pensionAmount: 47900,
      bankName: 'Wema Bank',
      accountLast4: '1345',
      photoUrl: null,
      status: 'Active',
      lastVerified: '2026-01-22T15:20:00',
      nextVerificationDue: '2026-07-22',
      verificationCount: 2,
      onboardedDate: '2024-07-30'
    },
    {
      id: 'CRS-PEN-2024-0009',
      firstName: 'Comfort',
      lastName: 'Ayuk',
      dateOfBirth: '1951-08-03',
      gender: 'Female',
      phone: '0906****889',
      phoneRaw: '09064321889',
      email: null,
      lga: 'Boki',
      category: 'Health Service Retiree',
      retirementDate: '2014-09-30',
      pensionAmount: 71300,
      bankName: 'Stanbic IBTC',
      accountLast4: '6728',
      photoUrl: null,
      status: 'Active',
      lastVerified: '2025-12-28T09:40:00',
      nextVerificationDue: '2026-06-28',
      verificationCount: 7,
      onboardedDate: '2023-07-14'
    },
    {
      id: 'CRS-PEN-2024-0010',
      firstName: 'Augustine',
      lastName: 'Edet',
      dateOfBirth: '1959-02-25',
      gender: 'Male',
      phone: '0708****004',
      phoneRaw: '07089650004',
      email: 'a.edet@email.com',
      lga: 'Obudu',
      category: 'Civil Service Retiree',
      retirementDate: '2023-06-30',
      pensionAmount: 58700,
      bankName: 'Ecobank',
      accountLast4: '4590',
      photoUrl: null,
      status: 'Active',
      lastVerified: '2026-02-14T13:05:00',
      nextVerificationDue: '2026-08-14',
      verificationCount: 1,
      onboardedDate: '2025-01-20'
    },
    {
      id: 'CRS-PEN-2024-0011',
      firstName: 'Theresa',
      lastName: 'Obia',
      dateOfBirth: '1954-10-17',
      gender: 'Female',
      phone: '0803****102',
      phoneRaw: '08039901102',
      email: null,
      lga: 'Biase',
      category: 'Local Government Retiree',
      retirementDate: '2017-12-31',
      pensionAmount: 42100,
      bankName: 'First Bank of Nigeria',
      accountLast4: '7831',
      photoUrl: null,
      status: 'Active',
      lastVerified: '2025-11-10T11:25:00',
      nextVerificationDue: '2026-05-10',
      verificationCount: 5,
      onboardedDate: '2024-02-08'
    },
    {
      id: 'CRS-PEN-2024-0012',
      firstName: 'Francis',
      lastName: 'Obono',
      dateOfBirth: '1961-05-09',
      gender: 'Male',
      phone: '0815****738',
      phoneRaw: '08155443738',
      email: null,
      lga: 'Bekwarra',
      category: 'Teaching Service Retiree',
      retirementDate: '2024-03-31',
      pensionAmount: 51200,
      bankName: 'Polaris Bank',
      accountLast4: '0923',
      photoUrl: null,
      status: 'Awaiting Verification',
      lastVerified: null,
      nextVerificationDue: '2026-03-31',
      verificationCount: 0,
      onboardedDate: '2025-12-01'
    }
  ];


  // ===========================================================
  // Verification Sessions
  // ===========================================================
  const verificationSessions = [
    {
      sessionId: 'VS-2026-0001',
      pensionerId: 'CRS-PEN-2024-0001',
      pensionerName: 'Margaret Effiom',
      lga: 'Calabar Municipality',
      type: 'Self-Service',
      status: 'Verified',
      startedAt: '2025-12-15T10:20:00',
      completedAt: '2025-12-15T10:24:00',
      livenessScore: 0.97,
      faceMatchScore: 0.94,
      reviewedBy: null,
      notes: null,
      reasonTag: null
    },
    {
      sessionId: 'VS-2026-0002',
      pensionerId: 'CRS-PEN-2024-0002',
      pensionerName: 'Emmanuel Agbo',
      lga: 'Ogoja',
      type: 'Self-Service',
      status: 'Verified',
      startedAt: '2026-01-08T09:10:00',
      completedAt: '2026-01-08T09:15:00',
      livenessScore: 0.92,
      faceMatchScore: 0.89,
      reviewedBy: null,
      notes: null,
      reasonTag: null
    },
    {
      sessionId: 'VS-2026-0003',
      pensionerId: 'CRS-PEN-2024-0004',
      pensionerName: 'Patrick Ushie',
      lga: 'Ikom',
      type: 'Self-Service',
      status: 'Pending Review',
      startedAt: '2026-03-10T14:30:00',
      completedAt: null,
      livenessScore: 0.65,
      faceMatchScore: 0.58,
      reviewedBy: null,
      notes: 'Low liveness confidence — possible poor lighting condition.',
      reasonTag: 'Low Confidence'
    },
    {
      sessionId: 'VS-2026-0004',
      pensionerId: 'CRS-PEN-2024-0005',
      pensionerName: 'Felicia Bassey',
      lga: 'Akamkpa',
      type: 'Self-Service',
      status: 'Verified',
      startedAt: '2026-02-03T11:25:00',
      completedAt: '2026-02-03T11:30:00',
      livenessScore: 0.95,
      faceMatchScore: 0.91,
      reviewedBy: null,
      notes: null,
      reasonTag: null
    },
    {
      sessionId: 'VS-2026-0005',
      pensionerId: 'CRS-PEN-2024-0007',
      pensionerName: 'Rose Etim',
      lga: 'Odukpani',
      type: 'Assisted',
      status: 'Failed',
      startedAt: '2025-12-10T15:40:00',
      completedAt: '2025-12-10T15:52:00',
      livenessScore: 0.41,
      faceMatchScore: 0.35,
      reviewedBy: 'Verification Officer B. Nku',
      notes: 'Pensioner unable to complete liveness prompts due to physical limitation. Referred to support center.',
      reasonTag: 'Physical Limitation'
    },
    {
      sessionId: 'VS-2026-0006',
      pensionerId: 'CRS-PEN-2024-0003',
      pensionerName: 'Grace Okon',
      lga: 'Calabar South',
      type: 'Self-Service',
      status: 'Verified',
      startedAt: '2025-11-20T14:40:00',
      completedAt: '2025-11-20T14:45:00',
      livenessScore: 0.96,
      faceMatchScore: 0.93,
      reviewedBy: null,
      notes: null,
      reasonTag: null
    },
    {
      sessionId: 'VS-2026-0007',
      pensionerId: 'CRS-PEN-2024-0008',
      pensionerName: 'Daniel Okoi',
      lga: 'Yakurr',
      type: 'Self-Service',
      status: 'Verified',
      startedAt: '2026-01-22T15:15:00',
      completedAt: '2026-01-22T15:20:00',
      livenessScore: 0.90,
      faceMatchScore: 0.87,
      reviewedBy: null,
      notes: null,
      reasonTag: null
    },
    {
      sessionId: 'VS-2026-0008',
      pensionerId: 'CRS-PEN-2024-0006',
      pensionerName: 'Joseph Adie',
      lga: 'Obubra',
      type: 'Self-Service',
      status: 'Pending Review',
      startedAt: '2026-03-18T09:05:00',
      completedAt: null,
      livenessScore: 0.72,
      faceMatchScore: 0.68,
      reviewedBy: null,
      notes: 'Face match below threshold — may require in-person confirmation.',
      reasonTag: 'Low Face Match'
    },
    {
      sessionId: 'VS-2026-0009',
      pensionerId: 'CRS-PEN-2024-0009',
      pensionerName: 'Comfort Ayuk',
      lga: 'Boki',
      type: 'Assisted',
      status: 'Verified',
      startedAt: '2025-12-28T09:30:00',
      completedAt: '2025-12-28T09:40:00',
      livenessScore: 0.88,
      faceMatchScore: 0.85,
      reviewedBy: 'Agent M. Ogar',
      notes: 'Assisted verification completed at Boki LGA Center.',
      reasonTag: null
    },
    {
      sessionId: 'VS-2026-0010',
      pensionerId: 'CRS-PEN-2024-0010',
      pensionerName: 'Augustine Edet',
      lga: 'Obudu',
      type: 'Self-Service',
      status: 'Verified',
      startedAt: '2026-02-14T13:00:00',
      completedAt: '2026-02-14T13:05:00',
      livenessScore: 0.93,
      faceMatchScore: 0.90,
      reviewedBy: null,
      notes: null,
      reasonTag: null
    }
  ];


  // ===========================================================
  // Admin Roles
  // ===========================================================
  const adminRoles = [
    {
      roleId: 'ROLE-001',
      roleName: 'Pension Board Administrator',
      description: 'Full system access including configuration and user management.',
      permissions: ['all'],
      level: 'Super'
    },
    {
      roleId: 'ROLE-002',
      roleName: 'Verification Officer',
      description: 'Reviews pending verifications, approves or flags records.',
      permissions: ['view_records', 'review_verification', 'approve', 'flag', 'add_notes'],
      level: 'Standard'
    },
    {
      roleId: 'ROLE-003',
      roleName: 'Supervisor',
      description: 'Oversees verification officers, handles escalations.',
      permissions: ['view_records', 'review_verification', 'approve', 'escalate', 'manage_officers', 'view_analytics'],
      level: 'Senior'
    },
    {
      roleId: 'ROLE-004',
      roleName: 'Auditor',
      description: 'Read-only access to all records, verification logs, and audit trails.',
      permissions: ['view_records', 'view_audit_logs', 'view_analytics', 'export_reports'],
      level: 'Audit'
    },
    {
      roleId: 'ROLE-005',
      roleName: 'Assisted Verification Agent',
      description: 'Field or center-based agent who assists pensioners with verification.',
      permissions: ['search_pensioner', 'initiate_assisted_verification', 'record_outcome', 'add_notes'],
      level: 'Field'
    }
  ];




  // ===========================================================
  // Analytics / Dashboard Metrics
  // ===========================================================
  const analytics = {
    currentCycle: {
      name: 'Q1 2026 Verification Cycle',
      startDate: '2026-01-01',
      endDate: '2026-03-31',
      status: 'Active'
    },
    summary: {
      totalPensioners: 14832,
      verifiedThisCycle: 9641,
      pendingReview: 237,
      failedAttempts: 89,
      assistedVerifications: 412,
      awaitingVerification: 4453,
      suspiciousFlags: 14,
      lgasCovered: 18
    },
    lgaBreakdown: [
      { lga: 'Calabar Municipality', total: 3210, verified: 2445, pending: 52, failed: 18 },
      { lga: 'Calabar South',        total: 2840, verified: 2102, pending: 38, failed: 12 },
      { lga: 'Ogoja',                total: 1105, verified: 720, pending: 21, failed: 8 },
      { lga: 'Ikom',                 total: 980,  verified: 618, pending: 15, failed: 5 },
      { lga: 'Obudu',                total: 870,  verified: 561, pending: 18, failed: 7 },
      { lga: 'Akamkpa',              total: 760,  verified: 512, pending: 12, failed: 4 },
      { lga: 'Obubra',               total: 710,  verified: 484, pending: 14, failed: 6 },
      { lga: 'Yakurr',               total: 685,  verified: 445, pending: 11, failed: 3 },
      { lga: 'Boki',                 total: 630,  verified: 398, pending: 10, failed: 5 },
      { lga: 'Odukpani',             total: 590,  verified: 391, pending: 9, failed: 4 },
      { lga: 'Yala',                 total: 550,  verified: 348, pending: 8, failed: 3 },
      { lga: 'Biase',                total: 480,  verified: 305, pending: 7, failed: 3 },
      { lga: 'Bekwarra',             total: 390,  verified: 248, pending: 6, failed: 2 },
      { lga: 'Obanliku',             total: 355,  verified: 225, pending: 5, failed: 2 },
      { lga: 'Akpabuyo',             total: 320,  verified: 199, pending: 4, failed: 2 },
      { lga: 'Abi',                  total: 280,  verified: 178, pending: 4, failed: 3 },
      { lga: 'Etung',                total: 245,  verified: 152, pending: 2, failed: 1 },
      { lga: 'Bakassi',              total: 132,  verified: 80, pending: 1, failed: 1 }
    ],
    monthlyTrend: [
      { month: 'Oct 2025', verified: 7802, pending: 310, failed: 102 },
      { month: 'Nov 2025', verified: 8234, pending: 285, failed: 95 },
      { month: 'Dec 2025', verified: 8891, pending: 264, failed: 88 },
      { month: 'Jan 2026', verified: 9102, pending: 251, failed: 91 },
      { month: 'Feb 2026', verified: 9388, pending: 242, failed: 87 },
      { month: 'Mar 2026', verified: 9641, pending: 237, failed: 89 }
    ],
    verificationRate: 65.0,
    assistedRate: 2.8,
    averageSessionDuration: '4m 32s'
  };


  // ===========================================================
  // Support Cases
  // ===========================================================
  const supportCases = [
    {
      caseId: 'SC-2026-001',
      pensionerId: 'CRS-PEN-2024-0007',
      pensionerName: 'Rose Etim',
      lga: 'Odukpani',
      category: 'Verification Difficulty',
      priority: 'High',
      status: 'Open',
      summary: 'Pensioner unable to complete self-service verification due to mobility and vision limitations. Requires assisted verification at nearest center.',
      assignedTo: 'Mary Ogar',
      createdAt: '2025-12-10T16:00:00',
      updatedAt: '2025-12-12T09:30:00',
      notes: [
        { by: 'Blessing Nku', text: 'Failed verification session reviewed. Liveness failure attributed to physical limitation, not fraud.', at: '2025-12-10T17:20:00' },
        { by: 'Mary Ogar', text: 'Scheduled assisted verification for 28 Dec at Odukpani LGA Center.', at: '2025-12-12T09:30:00' }
      ]
    },
    {
      caseId: 'SC-2026-002',
      pensionerId: 'CRS-PEN-2024-0004',
      pensionerName: 'Patrick Ushie',
      lga: 'Ikom',
      category: 'Account Mismatch',
      priority: 'Medium',
      status: 'In Progress',
      summary: 'Pensioner reports pension ID was matched to a different phone number. Requesting update of registered phone number on file.',
      assignedTo: 'Blessing Nku',
      createdAt: '2026-02-20T10:15:00',
      updatedAt: '2026-03-05T14:00:00',
      notes: [
        { by: 'Blessing Nku', text: 'Phone update requires supervisor approval. Awaiting documentation from pensioner.', at: '2026-02-20T11:00:00' },
        { by: 'Esther Ita', text: 'Documentation received. Processing phone number update.', at: '2026-03-05T14:00:00' }
      ]
    },
    {
      caseId: 'SC-2026-003',
      pensionerId: 'CRS-PEN-2024-0012',
      pensionerName: 'Francis Obono',
      lga: 'Bekwarra',
      category: 'First-Time Access',
      priority: 'Low',
      status: 'Open',
      summary: 'New retiree needs assistance completing first-time onboarding. Has smartphone but limited internet access.',
      assignedTo: null,
      createdAt: '2026-03-15T08:45:00',
      updatedAt: '2026-03-15T08:45:00',
      notes: []
    },
    {
      caseId: 'SC-2026-004',
      pensionerId: 'CRS-PEN-2024-0006',
      pensionerName: 'Joseph Adie',
      lga: 'Obubra',
      category: 'Suspicious Activity',
      priority: 'High',
      status: 'Escalated',
      summary: 'Multiple failed face-match attempts detected from different device signatures within short timeframe. Flagged for investigation.',
      assignedTo: 'Esther Ita',
      createdAt: '2026-03-18T09:30:00',
      updatedAt: '2026-03-19T10:00:00',
      notes: [
        { by: 'Blessing Nku', text: 'Three verification attempts from different devices in under 20 minutes. Face match consistently below threshold.', at: '2026-03-18T09:45:00' },
        { by: 'Esther Ita', text: 'Escalated to supervisor review. Pensioner to be contacted for in-person verification.', at: '2026-03-19T10:00:00' }
      ]
    },
    {
      caseId: 'SC-2026-005',
      pensionerId: 'CRS-PEN-2024-0011',
      pensionerName: 'Theresa Obia',
      lga: 'Biase',
      category: 'Payment Inquiry',
      priority: 'Medium',
      status: 'Resolved',
      summary: 'Pensioner inquired about delayed pension payment after successful verification. Confirmed payment was processed.',
      assignedTo: 'Blessing Nku',
      createdAt: '2026-01-08T13:20:00',
      updatedAt: '2026-01-12T11:00:00',
      notes: [
        { by: 'Blessing Nku', text: 'Verification confirmed successful. Payment status checked with finance unit.', at: '2026-01-09T09:00:00' },
        { by: 'Blessing Nku', text: 'Payment confirmed processed on 10 Jan. Case resolved.', at: '2026-01-12T11:00:00' }
      ]
    }
  ];


  // ===========================================================
  // Audit Logs
  // ===========================================================
  const auditLogs = [
    {
      logId: 'AUD-0001',
      timestamp: '2026-03-26T08:31:00',
      actor: 'Blessing Nku',
      actorRole: 'Verification Officer',
      action: 'Login',
      target: 'Admin Portal',
      detail: 'Successful admin login from Calabar Municipality office.',
      ipAddress: '102.89.xxx.xxx',
      severity: 'Info'
    },
    {
      logId: 'AUD-0002',
      timestamp: '2026-03-26T08:45:00',
      actor: 'Blessing Nku',
      actorRole: 'Verification Officer',
      action: 'Review Verification',
      target: 'VS-2026-0003 (Patrick Ushie)',
      detail: 'Reviewed pending verification session. Low liveness score flagged.',
      ipAddress: '102.89.xxx.xxx',
      severity: 'Info'
    },
    {
      logId: 'AUD-0003',
      timestamp: '2026-03-25T16:22:00',
      actor: 'Esther Ita',
      actorRole: 'Supervisor',
      action: 'Escalate Case',
      target: 'SC-2026-004 (Joseph Adie)',
      detail: 'Suspicious activity case escalated for supervisor investigation.',
      ipAddress: '102.89.xxx.xxx',
      severity: 'Warning'
    },
    {
      logId: 'AUD-0004',
      timestamp: '2026-03-26T09:01:00',
      actor: 'Mary Ogar',
      actorRole: 'Assisted Verification Agent',
      action: 'Login',
      target: 'Agent Console',
      detail: 'Agent logged into assisted verification console from Boki LGA Center.',
      ipAddress: '105.112.xxx.xxx',
      severity: 'Info'
    },
    {
      logId: 'AUD-0005',
      timestamp: '2026-03-24T10:12:00',
      actor: 'Cornelius Obasi',
      actorRole: 'Auditor',
      action: 'Export Report',
      target: 'Q1 2026 Verification Summary',
      detail: 'Auditor exported quarterly verification report for compliance review.',
      ipAddress: '102.89.xxx.xxx',
      severity: 'Info'
    },
    {
      logId: 'AUD-0006',
      timestamp: '2026-03-26T07:46:00',
      actor: 'Michael Essien',
      actorRole: 'Pension Board Administrator',
      action: 'Login',
      target: 'Admin Portal',
      detail: 'Administrator login. Full access granted.',
      ipAddress: '102.89.xxx.xxx',
      severity: 'Info'
    },
    {
      logId: 'AUD-0007',
      timestamp: '2026-03-19T10:02:00',
      actor: 'Esther Ita',
      actorRole: 'Supervisor',
      action: 'Update Case Status',
      target: 'SC-2026-004 (Joseph Adie)',
      detail: 'Case status changed from Open to Escalated. Assigned for in-person verification.',
      ipAddress: '102.89.xxx.xxx',
      severity: 'Warning'
    },
    {
      logId: 'AUD-0008',
      timestamp: '2026-03-18T09:48:00',
      actor: 'System',
      actorRole: 'Automated',
      action: 'Suspicious Activity Flag',
      target: 'CRS-PEN-2024-0006 (Joseph Adie)',
      detail: 'Automated flag raised: multiple failed verification attempts from different devices within 20-minute window.',
      ipAddress: null,
      severity: 'Alert'
    },
    {
      logId: 'AUD-0009',
      timestamp: '2026-03-15T08:46:00',
      actor: 'System',
      actorRole: 'Automated',
      action: 'Support Case Created',
      target: 'SC-2026-003 (Francis Obono)',
      detail: 'Support case auto-generated for new retiree requiring onboarding assistance.',
      ipAddress: null,
      severity: 'Info'
    },
    {
      logId: 'AUD-0010',
      timestamp: '2026-03-05T14:01:00',
      actor: 'Esther Ita',
      actorRole: 'Supervisor',
      action: 'Approve Record Update',
      target: 'CRS-PEN-2024-0004 (Patrick Ushie)',
      detail: 'Approved phone number update for pensioner. Documentation verified.',
      ipAddress: '102.89.xxx.xxx',
      severity: 'Info'
    }
  ];

  // ===========================================================
  // Admin Users
  // ===========================================================
  const adminUsers = [
    {
      userId: 'ADM-001',
      firstName: 'Margaret',
      lastName: 'Uke',
      email: 'm.uke@crspb.gov.ng',
      role: 'Pension Board Administrator',
      status: 'Active',
      lastLogin: '2026-03-29T10:15:00',
      lga: null,
      actions: 312
    },
    {
      userId: 'ADM-002',
      firstName: 'Michael',
      lastName: 'Essien',
      email: 'm.essien@crspb.gov.ng',
      role: 'Pension Board Administrator',
      status: 'Active',
      lastLogin: '2026-03-29T07:45:00',
      lga: null,
      actions: 419
    },
    {
      userId: 'ADM-003',
      firstName: 'Esther',
      lastName: 'Ita',
      email: 'e.ita@crspb.gov.ng',
      role: 'Supervisor',
      status: 'Active',
      lastLogin: '2026-03-28T14:30:00',
      lga: 'Calabar Municipality',
      actions: 142
    },
    {
      userId: 'ADM-004',
      firstName: 'Blessing',
      lastName: 'Nku',
      email: 'b.nku@crspb.gov.ng',
      role: 'Verification Officer',
      status: 'Active',
      lastLogin: '2026-03-29T08:10:00',
      lga: 'Odukpani',
      actions: 512
    },
    {
      userId: 'ADM-005',
      firstName: 'Joseph',
      lastName: 'Agba',
      email: 'j.agba@crspb.gov.ng',
      role: 'Auditor',
      status: 'Inactive',
      lastLogin: '2025-12-10T09:00:00',
      lga: null,
      actions: 89
    }
  ];


  // ===========================================================
  // Public API — expose all data structures
  // ===========================================================
  return {
    LGAs,
    pensionCategories,
    verificationStatuses,
    pensioners,
    verificationSessions,
    adminRoles,
    adminUsers,
    analytics,
    supportCases,
    auditLogs,

    // Utility: find pensioner by ID
    getPensioner(id) {
      return pensioners.find(p => p.id === id) || null;
    },

    // Utility: get sessions for a pensioner
    getSessions(pensionerId) {
      return verificationSessions.filter(s => s.pensionerId === pensionerId);
    },

    // Utility: get support cases for a pensioner
    getCases(pensionerId) {
      return supportCases.filter(c => c.pensionerId === pensionerId);
    },

    // Utility: format date for display
    formatDate(isoString) {
      if (!isoString) return '—';
      const d = new Date(isoString);
      return d.toLocaleDateString('en-NG', { day: 'numeric', month: 'short', year: 'numeric' });
    },

    // Utility: format date and time
    formatDateTime(isoString) {
      if (!isoString) return '—';
      const d = new Date(isoString);
      return d.toLocaleDateString('en-NG', { day: 'numeric', month: 'short', year: 'numeric' }) +
        ' at ' +
        d.toLocaleTimeString('en-NG', { hour: '2-digit', minute: '2-digit' });
    }
  };

})();
