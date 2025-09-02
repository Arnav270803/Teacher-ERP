------------core flows (rough sketch)----------------

1) semester rollover

 Admin creates new semester with dates → activates it.

 Admin clones courses/classes from last semester or sets up fresh.

 Assign teachers to classes.

 Enroll students (bulk import from CSV or integration).

 Define attendance_rules and holidays.



2) daily attendance by teacher

 Teacher opens class page → “Start Attendance Session”.

 Session created in attendance_sessions (status=open).

 UI shows enrolled roster (as of held_on and within enrollment date range).

 Teacher marks present/absent/late/excused (bulk or individually).

 Teacher closes session → status=closed.

 audit_logs capture who marked what.


  
3) edits & audit

 Teacher or admin edits a mark → attendance_marks updated, audit_logs store before/after.

 Recalculation of percentages on-the-fly or asynchronously.



4) student view

 Student opens dashboard → aggregated % per class:

 % = (present + (excused counts?)) / (total_count_after_rules)

 rules apply: drop lowest N sessions, grace %, convert late>threshold → absent, exclude holidays/makeup logic.


  
  5) make-up / extra classes

 Teacher creates a session with makeup_for_session_id or slot_type=extra.

 Counts toward total depending on rules.


  <----------------------- ye baad k liye hai ----------------------------------->

 key edge cases (plan for these!)

 mid-semester enrollment changes: student joins late or drops; only count sessions within enrolled_from/enrolled_to.

 teacher changes: primary teacher replaced mid-semester; historical sessions must remain attributed to the old teacher.

 substitute/co-teaching: multiple teachers can mark; require role & permissions.

 duplicate sessions: accidental double creation for same time; guard with uniqueness + idempotency tokens.

 partial/short sessions: class ended early; keep start_ts/end_ts to detect anomalies.

 late vs absent: rule that late beyond X minutes flips to absent; consistent calculation.

 excused absence: decides whether contributes to denominator; rule-driven and auditable reasons.

 holidays/ad-hoc closures: auto-exclude from totals; but allow a session on a holiday if it’s a make-up (explicit flag).

 make-up mapping: avoid inflating totals; decide whether make-up replaces a missed slot or adds to total.

a ttendance fraud (proxy marks, QR forwarding): throttle, device binding, geofence (optional), one device per teacher, time windows.

 timezone & clock skew: store UTC timestamps; display in local. (If multi-campus, store campus tz.)

 bulk imports: deduplicate by natural keys (roll no, course code, semester) + dry-run validation.

 name/roll changes: immutable student ID; historical rows shouldn’t break.

 soft deletes vs hard deletes: prefer soft delete/void for sessions; never physically drop marks without audit.

 retakes/re-enroll: a student can repeat the course next semester; keep separate class_id.

 lab/tutorial groups: one course with multiple linked classes; students in only one; ensure reports aggregate correctly per enrolled class.

 capacity overrides: enrolling beyond capacity; log and allow admin override.

 offline marking (future): cache and sync with conflict detection (version columns).

 access control leaks: teachers should only see classes they teach; students only theirs; admins see all.

 performance: large rosters and date ranges; paginate sessions and use summary tables if needed.

 calculation rules (define up front)

 denominator = total eligible sessions for the student in that class (within enrollment date, excluding holidays, applying drops).

 numerator = present + (excused if rule says count) + (late if not converted).

 late threshold (minutes), grace percent, drop N lowest sessions.

 rounding policy (floor/round half up).

lock window: sessions editable only within X days unless admin.
