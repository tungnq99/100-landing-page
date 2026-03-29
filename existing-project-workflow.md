# Existing Project Workflows

> Workflow cho Join, Add Feature, Fix Bug, và Refactor trong existing projects

**Version:** 1.0  
**Date:** 2026-01-24  
**Status:** Production Ready  
**Applies to:** All existing project work (Join, Feature, Bug, Refactor)  

---

## 🚨 CORE PRINCIPLE: Analyze-First Protocol

### The Golden Rule

**🔴 MANDATORY: NO CODE BEFORE USER APPROVAL**

**🔴 PHASE 0 (Understand Codebase) KHÔNG BAO GIỜ SKIP**

---

## 📋 The Analyze-First Protocol (4 Steps)

```
┌─────────────────────────────────────────────────────────┐
│ STEP 0: UNDERSTAND CODEBASE (MANDATORY) 📚              │
│ - Read project docs                                     │
│ - Scan relevant code                                    │
│ - Understand patterns & conventions                     │
│ 🔴 KHÔNG BAO GIỜ SKIP                                   │
└─────────────────────────────────────────────────────────┘
              ↓
┌─────────────────────────────────────────────────────────┐
│ STEP 1: ASK USER QUESTIONS 🤔                           │
│ - Clarifying questions về requirements                  │
│ - Technical approach questions                          │
│ - Priority & scope questions                            │
└─────────────────────────────────────────────────────────┘
              ↓
┌─────────────────────────────────────────────────────────┐
│ STEP 2: IMPACT ANALYSIS 🔍                              │
│ - Files affected                                        │
│ - 🔴 CODE EXAMPLES (Before/After) - MANDATORY           │
│ - Dependencies, risks                                   │
│ - 🔴 ROLLBACK PLAN - MANDATORY                          │
│ - Create impact-analysis-[task].md                     │
└─────────────────────────────────────────────────────────┘
              ↓
┌─────────────────────────────────────────────────────────┐
│ STEP 3: PRESENT + WAIT FOR APPROVAL ⏸️                 │
│ - notify_user with impact analysis                     │
│ - BlockedOnUser: true                                  │
│ 🔴 KHÔNG CODE CHO ĐẾN KHI USER APPROVE                 │
└─────────────────────────────────────────────────────────┘
              ↓
┌─────────────────────────────────────────────────────────┐
│ STEP 4: IMPLEMENT (ONLY AFTER APPROVAL) ✅              │
│ - Proceed to implementation                            │
│ - If rejected → Go back to Step 2, revise              │
└─────────────────────────────────────────────────────────┘
```

---

## 🔍 STEP 0: Understand Codebase (MANDATORY)

**🔴 BẮT BUỘC cho MỌI workflow**

### Process

```markdown
Step 0.1: Read Project Documentation
- [ ] README.md
- [ ] CODEBASE.md (if exists)
- [ ] ARCHITECTURE.md (if exists)
- [ ] package.json / requirements.txt (dependencies)
- [ ] CONTRIBUTING.md (if exists)

Step 0.2: Scan Relevant Code
Agent: explorer-agent

Actions:
- Identify files related to task
- Understand current implementation
- Map dependencies
- Note conventions/patterns

Example (Add PDF Export):
Files scanned:
- src/pages/Dashboard.tsx (where button will go)
- src/components/DashboardToolbar.tsx (existing toolbar)
- src/utils/csvExport.ts (similar export - reference pattern)
- package.json (existing dependencies)

Findings:
- Export pattern: Utility in /utils, button in toolbar
- Naming: camelCase functions, PascalCase components
- Error handling: toast notifications
- Testing: Jest unit tests expected

Step 0.3: Understand Architecture
- Component architecture
- Data flow (props, state, context, store)
- API patterns
- Testing patterns

Step 0.4: Identify Technology Stack
- Frontend framework (React, Vue, Angular, Svelte, etc.)
- Backend framework (Express, Django, Laravel, Spring, etc.)
- Database (PostgreSQL, MongoDB, MySQL, etc.)
- Mobile (React Native, Flutter, Swift, Kotlin, etc.)
- State management (Redux, Zustand, Pinia, etc.)
- Testing framework (Jest, Vitest, Pytest, etc.)
```

---

## 🔀 STEP 0.5: Technology Detection & Agent/Skill Routing

**🔴 CRITICAL:** Sau khi hiểu codebase, PHẢI identify tech stack để route đúng agent & skills

### Technology Detection Matrix

```python
# Pseudo-code for tech detection

def detect_technology(project):
    tech_stack = {}
    
    # Check package.json / requirements.txt / Gemfile / composer.json
    if exists("package.json"):
        deps = read("package.json").dependencies
        
        # Frontend detection
        if "react" in deps or "next" in deps:
            tech_stack["frontend"] = "React/Next.js"
        elif "vue" in deps or "nuxt" in deps:
            tech_stack["frontend"] = "Vue/Nuxt"
        elif "@angular" in deps:
            tech_stack["frontend"] = "Angular"
        elif "svelte" in deps:
            tech_stack["frontend"] = "Svelte"
            
        # Mobile detection
        if "react-native" in deps or "expo" in deps:
            tech_stack["mobile"] = "React Native"
            
    elif exists("requirements.txt"):
        deps = read("requirements.txt")
        
        if "django" in deps:
            tech_stack["backend"] = "Django"
        elif "flask" in deps:
            tech_stack["backend"] = "Flask"
        elif "fastapi" in deps:
            tech_stack["backend"] = "FastAPI"
            
    elif exists("pubspec.yaml"):
        tech_stack["mobile"] = "Flutter"
        
    elif exists("Package.swift") or exists("*.xcodeproj"):
        tech_stack["mobile"] = "iOS Native (Swift)"
        
    elif exists("build.gradle"):
        tech_stack["mobile"] = "Android Native (Kotlin/Java)"
    
    return tech_stack
```

### Agent & Skill Routing Table

| Tech Stack Detected | Primary Agent | Skills to Load |
|---------------------|---------------|----------------|
| **React / Next.js** | `frontend-specialist` | `react-patterns`, `frontend-design` |
| **Vue / Nuxt** | `frontend-specialist` | `vue-patterns`, `frontend-design` |
| **Angular** | `frontend-specialist` | `angular-patterns`, `frontend-design` |
| **Svelte / SvelteKit** | `frontend-specialist` | `svelte-patterns`, `frontend-design` |
| **React Native / Expo** | `mobile-developer` | `react-native-patterns`, `mobile-design` |
| **Flutter** | `mobile-developer` | `flutter-patterns`, `mobile-design` |
| **iOS Native (Swift)** | `mobile-developer` | `ios-patterns`, `mobile-design` |
| **Android Native (Kotlin)** | `mobile-developer` | `android-patterns`, `mobile-design` |
| **Django** | `backend-specialist` | `django-patterns`, `api-patterns`, `database-design` |
| **Flask** | `backend-specialist` | `flask-patterns`, `api-patterns` |
| **FastAPI** | `backend-specialist` | `fastapi-patterns`, `api-patterns` |
| **Express.js** | `backend-specialist` | `express-patterns`, `api-patterns` |
| **Laravel** | `backend-specialist` | `laravel-patterns`, `api-patterns`, `database-design` |
| **Spring Boot** | `backend-specialist` | `spring-patterns`, `api-patterns`, `database-design` |

### Routing Logic

```python
# After detecting tech stack

def route_to_agent_and_skills(tech_stack):
    agents = []
    skills = []
    
    # Frontend routing
    if "React/Next.js" in tech_stack["frontend"]:
        agents.append("frontend-specialist")
        skills.extend([
            "react-patterns",
            "frontend-design"
        ])
        
        # If Next.js specific
        if "next" in detected_framework:
            skills.append("nextjs-patterns")
    
    # Mobile routing  
    if "React Native" in tech_stack["mobile"]:
        agents.append("mobile-developer")  # ONLY mobile-developer!
        skills.extend([
            "react-native-patterns",
            "mobile-design"
        ])
        # ❌ DO NOT use frontend-specialist for mobile!
    
    # Backend routing
    if "Django" in tech_stack["backend"]:
        agents.append("backend-specialist")
        skills.extend([
            "django-patterns",
            "api-patterns",
            "database-design"
        ])
    
    # Cross-cutting concerns (ALL projects)
    skills.extend([
        "clean-code",          # Always
        "testing-patterns",    # Always
    ])
    
    return agents, skills
```

### Example Routing Scenarios

#### Scenario 1: Full-Stack Next.js App

```markdown
File detected: package.json

Dependencies:
- next@14.0.0
- react@18.0.0
- prisma@5.0.0
- tailwindcss@3.0.0

Technology Detection:
✅ Frontend: React + Next.js
✅ Database: Prisma (ORM)
✅ Styling: Tailwind CSS

Agent Routing:
→ Primary: frontend-specialist
→ Supporting: backend-specialist (for Prisma API routes)

Skills to Load:
- react-patterns
- nextjs-patterns
- frontend-design
- api-patterns (for API routes)
- database-design (for Prisma schema)
- clean-code
- testing-patterns
```

#### Scenario 2: React Native Mobile App

```markdown
File detected: package.json

Dependencies:
- react-native@0.72.0
- expo@49.0.0
- @react-navigation/native@6.0.0

Technology Detection:
✅ Mobile: React Native + Expo

Agent Routing:
→ Primary: mobile-developer (ONLY!)
❌ NOT frontend-specialist

Skills to Load:
- react-native-patterns
- mobile-design
- clean-code
- testing-patterns

❌ DO NOT load:
- frontend-design (web-specific)
- nextjs-patterns (not mobile)
```

#### Scenario 3: Django Backend API

```markdown
File detected: requirements.txt

Dependencies:
- Django==4.2.0
- djangorestframework==3.14.0
- psycopg2==2.9.0

Technology Detection:
✅ Backend: Django
✅ API: Django REST Framework
✅ Database: PostgreSQL

Agent Routing:
→ Primary: backend-specialist

Skills to Load:
- django-patterns
- api-patterns
- database-design
- security-patterns (for API security)
- clean-code
- testing-patterns

❌ NO frontend skills needed
```

### Feature-Specific Skill Loading

**After routing to base agent, load feature-specific skills:**

```python
def load_feature_skills(feature_type, base_skills):
    additional_skills = []
    
    if feature_type == "PDF Export":
        additional_skills.append("file-handling-patterns")
        
    elif feature_type == "Payment Integration":
        additional_skills.extend([
            "payment-integration-patterns",
            "security-patterns"
        ])
        
    elif feature_type == "Real-time Chat":
        additional_skills.extend([
            "websocket-patterns",
            "real-time-data-patterns"
        ])
        
    elif feature_type == "Email Notifications":
        additional_skills.append("email-service-patterns")
    
    return base_skills + additional_skills
```

### Complete Step 0 Summary

```
STEP 0: Understand Codebase
  ↓
Step 0.1: Read Docs (README, ARCHITECTURE, etc.)
  ↓
Step 0.2: Scan Code (identify files, patterns)
  ↓
Step 0.3: Understand Architecture (components, data flow)
  ↓
Step 0.4: Identify Tech Stack (React? Django? Flutter?)
  ↓
STEP 0.5: Route to Agent & Skills (CRITICAL!)
  → IF React → frontend-specialist + react-patterns
  → IF Django → backend-specialist + django-patterns
  → IF React Native → mobile-developer + mobile-design
  → THEN add feature-specific skills
  ↓
READY for STEP 1 (Ask User Questions)
```

**Only AFTER routing → Proceed to Step 1**

---

## 🤔 STEP 1: Ask User Questions

**After understanding codebase, ask clarifying questions:**

### Question Templates

#### For Add Feature:
```markdown
"Tôi đã hiểu codebase. Trước khi implement [feature], tôi cần confirm:

1. **Scope:** [Specific scope question]
2. **Format/Output:** [What format/output expected?]
3. **Styling:** [UI/UX requirements?]
4. **Data:** [What data to use?]
5. **Performance:** [Client-side or server-side?]

Sau khi bạn trả lời, tôi sẽ:
- Phân tích impact chi tiết
- Show code examples (before/after)
- Tạo rollback plan
- CHỜ bạn approve"
```

#### For Fix Bug:
```markdown
"Tôi cần thêm thông tin về bug:

1. **Location:** Page/component nào? (URL or route)
2. **Reproduction:** Steps chính xác để reproduce?
3. **Error logs:** Có error logs không?
4. **Priority:** P0-urgent, P1-high, P2-medium?
5. **Scope:** OK để refactor while fixing?"
```

#### For Refactor:
```markdown
"Trước khi refactor [target], tôi cần:

1. **Why:** Reason to refactor? (Performance, readability, maintainability)
2. **Scope:** This file only, or related files too?
3. **API:** OK to change public API?
4. **Timeline:** Urgent or can take time?"
```

---

## 🔍 STEP 2: Impact Analysis

### Analysis Checklist

**Create:** `impact-analysis-[task-name].md`

**Must Include:**

1. **Summary**
2. **Requirements** (from user answers)
3. **Proposed Approach**
4. **🔴 Code Examples (MANDATORY)**
5. **Files Affected**
6. **Dependencies**
7. **Potential Risks**
8. **Testing Strategy**
9. **🔴 Rollback Plan (MANDATORY)**

### Template

```markdown
# Impact Analysis: [Task Name]

## Summary
- Type: [Add Feature / Fix Bug / Refactor]
- Priority: [P0 / P1 / P2]
- Complexity: [Low / Medium / High]
- Estimated Time: [X hours]

## Requirements
[User answers to questions]

## Proposed Approach
[How to implement]

## 🔴 Code Examples (MANDATORY)

### File: [filename]

**Before (Current):**
\```typescript
// Current implementation
const handleChange = (field, value) => {
  setFormData({...formData, [field]: value});
  // ❌ BUG: isDirty not updated
};
\```

**After (Proposed):**
\```typescript
// Fixed implementation
const handleChange = (field, value) => {
  setFormData({...formData, [field]: value});
  setIsDirty(true); // ✅ FIX
};
\```

**Changes:**
- Line 3: Added `setIsDirty(true)`
- Impact: Button enables when form modified

## Files Affected

### To Modify
- `path/to/file1.tsx` - [What changes]
- `path/to/file2.ts` - [What changes]

### To Create (NEW)
- `path/to/newfile.ts` - [Purpose]

### To Delete
- `path/to/oldfile.ts` - [Reason]

## Dependencies

### Add
- `package@version` - [Purpose]

### Upgrade
- `package` from `1.0` to `2.0` - [Why]

## Potential Risks

### Breaking Changes
- ⚠️ [List] or ✅ No breaking changes

### Performance
- Bundle size: +/- X KB
- Runtime: [Impact]

### Security
- [Concerns] or ✅ No new risks

## Testing Strategy

### Unit Tests
- [ ] Test case 1
- [ ] Test case 2

### Integration Tests
- [ ] Flow 1

### Manual Tests
1. Action → Expected result

### Regression Testing
- [ ] Feature A still works
- [ ] Feature B still works

## 🔴 Rollback Plan (MANDATORY)

### Rollback Steps
1. **Immediate Rollback:**
   \```bash
   git revert <commit-hash>
   git push
   \```

2. **Feature Flag (if applicable):**
   - Flag: `enable_[feature]`
   - Default: false
   - Rollout: 10% → 50% → 100%

3. **Database Rollback (if DB changes):**
   - Migration down: `migrations/xxx_rollback.sql`
   - Backup: `backups/db_before_xxx.sql`

4. **Dependency Rollback (if new packages):**
   \```bash
   npm uninstall [packages]
   git checkout HEAD~1 -- package-lock.json
   npm install
   \```

### Monitoring
- [ ] Error rate < 0.1%
- [ ] Performance < 3s
- [ ] User feedback channel

### Rollback Criteria
Rollback if:
- Error rate > 5%
- Performance degradation > 50%
- Critical bugs > 3 in 1 hour

### RTO
- Target: < 15 minutes
- Owner: [Engineer]
```

---

## ⏸️ STEP 3: Present + Wait for Approval

**notify_user:**

```markdown
"Tôi đã phân tích impact của [task]:

**Files sẽ sửa:**
- `src/pages/Dashboard.tsx` (add button)
- `src/utils/pdfExport.ts` (NEW - PDF logic)

**Dependencies:**
- Cần cài: `jspdf@^2.5.1`, `html2canvas@^1.4.1`

**Code Example:**
\```typescript
// NEW FILE: src/utils/pdfExport.ts
export async function exportToPDF(elementId: string) {
  const element = document.getElementById(elementId);
  const canvas = await html2canvas(element);
  const pdf = new jsPDF();
  pdf.addImage(canvas.toDataURL(), 'PNG', 10, 10);
  pdf.save('export.pdf');
}
\```

**Risks:**
- ⚠️ Bundle size +150KB
- ⚠️ Export takes 2-3s for large dashboard
- ✅ No breaking changes

**Rollback Plan:**
- Git revert ready
- Feature flag: `enable_pdf_export` (default: false)
- Can uninstall packages if needed

**Bạn có approve không?**

PathsToReview: [impact-analysis-pdf-export.md]
BlockedOnUser: true
```

**User:** "OK, proceed"

---

## ✅ STEP 4: Implement (Only After Approval)

**THEN and ONLY THEN:**

```
Agent: "Đã nhận approval. Bắt đầu implementation..."

[Proceed to Phase 4: Implementation]
```

**If rejected:**

```
User: "Đợi, tôi muốn server-side thay vì client-side"

Agent: "Understood. Tôi sẽ update analysis với server-side approach..."

[Go back to Step 2: Re-analyze]
[Present again]
[Wait for approval again]
```

---

## 📋 SCENARIOS

### Scenario A: Join Existing Project (Onboarding)

**Purpose:** Understand codebase for new team member

**Modified Flow:**

```
STEP 0: EXTENDED DISCOVERY (PRIMARY PHASE)
  Step 0.1-0.4:
    - Read all docs (README, CODEBASE, ARCHITECTURE)
    - Scan entire project structure
    - Identify entry points
    - Note patterns, conventions
    - Map tech stack
    - Check test coverage
  
  STEP 0.5: Technology Detection & Routing
    Example detected:
    - Tech: Next.js + Prisma + PostgreSQL
    → Agent: frontend-specialist + backend-specialist
    → Skills: react-patterns, nextjs-patterns, database-design
  
  Output: Onboarding Report (includes tech stack analysis)
  
STEP 1: ASK CLARIFYING QUESTIONS (if unclear)
  - "What's long-term vision?"
  - "Deprecated modules to avoid?"
  - "Priority: features vs tech debt?"
  
  (No implementation for onboarding)
```

**Onboarding Report Template:**

```markdown
# Project Onboarding: [Project Name]

## Quick Facts
- Type: [Full-stack / Mobile / API]
- Scale: [LOC, modules]
- Team: [Contributors]
- Last deploy: [Date]

## Tech Stack
- Frontend: [Stack]
- Backend: [Stack]
- Database: [Database]
- Deployment: [Platform]

## Code Conventions
- File naming: [Convention]
- Component structure: [Pattern]
- State management: [Tool]
- Testing: [Framework]

## Entry Points
- Frontend: [File]
- Backend: [File]
- Database: [Schema file]

## Common Tasks
- Add page: [Steps]
- Add API: [Steps]
- Update DB: [Steps]

## Known Issues
- TODOs: [Count]
- Test coverage: [%]
- Performance issues: [List]
```

---

### Scenario B: Add Feature

**Example:** "Thêm PDF export vào dashboard"

**Complete Flow:**

```
STEP 0: Understand
  Step 0.1-0.4:
    ✅ Read Dashboard.tsx  
    ✅ Check existing exports (csvExport.ts)
    ✅ Note pattern: util in /utils, button in toolbar
    ✅ Identify tech: React + Next.js + TypeScript
  
  STEP 0.5: Technology Detection & Routing
    Detected: Next.js project
    → Agent: frontend-specialist
    → Base Skills: react-patterns, nextjs-patterns, frontend-design
    
    Feature Type: PDF Export
    → Additional Skills: file-handling-patterns
    
    Final Skills Loaded:
    - react-patterns
    - nextjs-patterns
    - frontend-design
    - file-handling-patterns
    - clean-code
    - testing-patterns

STEP 1: Ask
  Q1: Export whole dashboard or current view?
  Q2: A4/Letter size?
  Q3: Client-side or server-side?
  
  User: Current view, A4, client-side

STEP 2: Analyze
  Create: impact-analysis-pdf-export.md
  - Code example: NEW pdfExport.ts
  - Files: Dashboard.tsx, DashboardToolbar.tsx
  - Dependencies: jspdf, html2canvas
  - Risks: Bundle +150KB, export 2-3s
  - Rollback: Git revert + feature flag

STEP 3: Present + Wait
  ⏸️ BlockedOnUser: true
  
  User: "OK, proceed"

STEP 4: Implement
  ✅ Install jspdf, html2canvas
  ✅ Create utils/pdfExport.ts
  ✅ Add button to DashboardToolbar
  ✅ Integrate in Dashboard
  ✅ Test manually
```

---

### Scenario C: Fix Bug

**Example:** "Button disabled khi không nên"

**Complete Flow:**

```
STEP 0: Understand
  Step 0.1-0.4:
    ✅ Read ProfilePage.tsx
    ✅ Check form handling logic
    ✅ Identify state management pattern
    ✅ Identify tech: React + useState
  
  STEP 0.5: Technology Detection & Routing
    Detected: React project
    → Agent: frontend-specialist
    → Base Skills: react-patterns, frontend-design
    
    Task Type: Bug Fix (Form state)
    → Additional Skills: debugging-patterns
    
    Final Skills Loaded:
    - react-patterns
    - debugging-patterns
    - testing-patterns (for regression testing)
    - clean-code

STEP 1: Ask
  Q1: Which page? (URL)
  Q2: Reproduction steps?
  Q3: Priority? (P0/P1/P2)
  
  User: /profile, Edit → Change field → Button still disabled, P1

STEP 2: Analyze + Debug
  ROOT CAUSE FOUND:
  - File: ProfilePage.tsx
  - Issue: isDirty state not updated
  - Fix: Add setIsDirty(true) in handleChange
  
  Create: impact-analysis-button-disabled-fix.md
  - Code example: Before/After handleChange
  - Files: ProfilePage.tsx (1 line)
  - Risk: LOW (isolated fix)
  - Rollback: Simple git revert

STEP 3: Present + Wait
  "Bug root cause: isDirty not updated
  Fix: 1 line (setIsDirty(true))
  Risk: LOW
  Approve?"
  
  ⏸️ BlockedOnUser: true
  
  User: "OK, fix it"

STEP 4: Fix
  ✅ Add setIsDirty(true)
  ✅ Test manually
  ✅ Run existing tests
```

---

### Scenario D: Refactor

**Example:** "Refactor UserService (500 lines → modular)"

** Complete Flow:**

```
STEP 0: Understand
  Step 0.1-0.4:
    ✅ Read UserService.ts (500 lines)
    ✅ Analyze dependencies
    ✅ Check test coverage (40%)
    ✅ Identify concerns: API, Logic, Validation mixed
    ✅ Identify tech: TypeScript + Node.js
  
  STEP 0.5: Technology Detection & Routing
    Detected: Node.js + TypeScript backend
    → Agent: backend-specialist
    → Base Skills: typescript-patterns, backend-patterns
    
    Task Type: Refactor (Code structure improvement)
    → Additional Skills: clean-code (MANDATORY for refactor)
    
    Final Skills Loaded:
    - typescript-patterns
    - backend-patterns
    - clean-code (refactoring-patterns, code-smells, SOLID)
    - testing-patterns (preserve behavior)

STEP 1: Ask  
  Q1: Why refactor? (Readability/Performance)
  Q2: Scope? (This file only?)
  Q3: OK to change public API?
  
  User: Readability, this file + related, keep public API same

STEP 2: Analyze
  Create: impact-analysis-userservice-refactor.md
  
  Before:
  \```
  services/UserService.ts (500 lines - monolithic)
  \```
  
  After:
  \```
  services/user/
  ├── userApi.ts (API calls)
  ├── userLogic.ts (Business logic)
  ├── userValidation.ts (Validation)
  └── index.ts (Public exports)
  \```
  
  Code examples: Show split structure
  Files: 1 delete, 4 new
  Risk: MEDIUM (large change, but no behavior change)
  Testing: Preserve ALL behavior
  Rollback: Git revert

STEP 3: Present + Wait
  "Refactor plan:
  - Split into 4 files
  - Keep public API same
  - Risk: MEDIUM
  - Test coverage goal: 70%+ (from 40%)
  Approve?"
  
  ⏸️ BlockedOnUser: true
  
  User: "Approve"

STEP 4: Refactor
  ✅ Create new folder structure
  ✅ Move code incrementally
  ✅ Update imports
  ✅ Delete old file
  ✅ Run tests (all pass)
  ✅ Check test coverage (72%)
```

---

## 🎯 Benefits

### For User
- ✅ Full transparency
- ✅ Control (approve/reject)
- ✅ Learning (understand impact)
- ✅ Risk reduction

### For Agent
- ✅ Clear mandate
- ✅ Better context
- ✅ Avoid rework

### For Codebase
- ✅ Less churn
- ✅ Cleaner history
- ✅ Better docs (impact analyses)

---

## ⚡ Edge Cases

### Case 1: "Just do it, I trust you"

**Action:**
- Still create impact analysis (for docs)
- Skip waiting for approval (auto-proceed)
- Log: "User gave blanket approval"

### Case 2: Trivial change (typo, comment)

**Action:**
- Skip Analyze-First for trivial changes
- Criteria: No logic change, < 5 lines, no behavior change
- Example: Fix typo in comment, update README

### Case 3: Emergency hotfix (production down)

**Action:**
- Compress protocol: Ask + Analyze in one message
- Don't wait (proceed immediately)
- Notify user AFTER fix with retroactive analysis

### Case 4: User wants code first

**Action:**
- Create draft PR with code
- Present code + analysis together
- User reviews → approves → merge

---

## ✅ Quick Reference

### When to Use This Workflow

✅ **Use for:**
- Joining existing project
- Adding feature to existing app
- Fixing bugs
- Refactoring code
- Updating dependencies

❌ **Don't use for:**
- New projects (use standard 5-phase workflow)
- Landing pages (use landing-page-workflow.md)

### Key Reminders

1. **🔴 NEVER SKIP Phase 0** (Understand Codebase)
2. **🔴 ALWAYS include code examples** (Before/After)
3. **🔴 ALWAYS include rollback plan** (4 components)
4. **⏸️ WAIT for approval** before coding
5. **📄 CREATE impact analysis** for documentation

---

**End of Existing Project Workflow**
