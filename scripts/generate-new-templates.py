#!/usr/bin/env python3
"""Generate 5 new OSINT 101 PDF templates using fpdf2."""

from fpdf import FPDF
import os

OUTPUT_DIR = "/workspace/sites/OSINT-training/public/downloads"


class OSPDF(FPDF):
    """Custom PDF with consistent header/footer for OSINT templates."""

    def header(self):
        self.set_font("Helvetica", "B", 8)
        self.set_text_color(100, 100, 100)
        self.cell(0, 6, "OSINT 101 - Professional Template", align="L")
        self.cell(0, 6, "OSINT 101", align="R", new_x="LMARGIN", new_y="NEXT")
        self.line(10, self.get_y(), 200, self.get_y())
        self.ln(3)

    def footer(self):
        self.set_y(-15)
        self.set_font("Helvetica", "I", 7)
        self.set_text_color(140, 140, 140)
        self.cell(0, 10, f"Page {self.page_no()}/{{nb}}", align="C")

    def section_title(self, title):
        self.set_font("Helvetica", "B", 13)
        self.set_text_color(25, 50, 100)
        self.cell(0, 8, title, new_x="LMARGIN", new_y="NEXT")
        self.set_draw_color(25, 50, 100)
        self.line(10, self.get_y(), 200, self.get_y())
        self.ln(3)

    def sub_title(self, title):
        self.set_font("Helvetica", "B", 10)
        self.set_text_color(50, 50, 50)
        self.cell(0, 6, title, new_x="LMARGIN", new_y="NEXT")
        self.ln(1)

    def body_text(self, text):
        self.set_font("Helvetica", "", 9)
        self.set_text_color(50, 50, 50)
        self.multi_cell(0, 4.5, text)
        self.ln(1)

    def draw_table(self, headers, rows, col_widths=None):
        """Draw a bordered table."""
        if col_widths is None:
            col_widths = [190 / len(headers)] * len(headers)

        # Header row
        self.set_font("Helvetica", "B", 8)
        self.set_fill_color(25, 50, 100)
        self.set_text_color(255, 255, 255)
        for i, h in enumerate(headers):
            self.cell(col_widths[i], 6, h, border=1, fill=True, align="C")
        self.ln()

        # Data rows
        self.set_font("Helvetica", "", 7.5)
        self.set_text_color(50, 50, 50)
        fill = False
        for row in rows:
            max_lines = 1
            cell_texts = []
            for i, cell in enumerate(row):
                # Estimate lines needed
                w = col_widths[i] - 2
                chars_per_line = max(int(w / 2.2), 10)
                lines = (len(str(cell)) // chars_per_line) + 1
                max_lines = max(max_lines, lines)
                cell_texts.append(str(cell))

            h = max(6, max_lines * 4.5)
            if h > 6:
                # Use multi_cell approach for tall rows
                y_start = self.get_y()
                x_start = self.get_x()

                # Check page break
                if y_start + h > 270:
                    self.add_page()
                    # Redraw header
                    self.set_font("Helvetica", "B", 8)
                    self.set_fill_color(25, 50, 100)
                    self.set_text_color(255, 255, 255)
                    for i2, h2 in enumerate(headers):
                        self.cell(col_widths[i2], 6, h2, border=1, fill=True, align="C")
                    self.ln()
                    self.set_font("Helvetica", "", 7.5)
                    self.set_text_color(50, 50, 50)
                    y_start = self.get_y()
                    x_start = self.get_x()
                    fill = not fill

                if fill:
                    self.set_fill_color(240, 243, 250)
                else:
                    self.set_fill_color(255, 255, 255)

                # Draw each cell with multi_cell
                x_pos = x_start
                for i, cell_text in enumerate(cell_texts):
                    self.set_xy(x_pos, y_start)
                    # Draw cell border rectangle
                    self.rect(x_pos, y_start, col_widths[i], h)
                    if fill:
                        self.set_fill_color(240, 243, 250)
                        self.rect(x_pos, y_start, col_widths[i], h, style="F")
                    self.set_xy(x_pos + 1, y_start + 0.5)
                    self.multi_cell(col_widths[i] - 2, 4.5, cell_text)
                    x_pos += col_widths[i]

                self.set_xy(x_start, y_start + h)
            else:
                if fill:
                    self.set_fill_color(240, 243, 250)
                else:
                    self.set_fill_color(255, 255, 255)

                for i, cell in enumerate(cell_texts):
                    self.cell(col_widths[i], h, cell, border=1, fill=True, align="L")

                self.ln()
            fill = not fill
        self.ln(4)


def make_username_tracker():
    pdf = OSPDF()
    pdf.alias_nb_pages()
    pdf.add_page()

    pdf.section_title("Username Tracker")
    pdf.body_text(
        "Track usernames and identities across multiple online platforms. "
        "Use this sheet to monitor a single subject's digital presence across "
        "social media, forums, and other services."
    )

    pdf.sub_title("Subject Information")
    pdf.body_text("Subject Name: .......................................................")
    pdf.body_text("Primary Alias: .......................................................")
    pdf.body_text("Case Reference: .......................................................")
    pdf.ln(2)

    headers = ["Username", "Platform", "Profile URL", "First Seen", "Last Active", "Posts", "Connections", "Notes"]
    col_w = [24, 22, 36, 22, 22, 16, 20, 28]
    rows = [
        ["user1", "Platform A", "https://example.com/user1", "2024-01-15", "2025-03-01", "142", "38", "Active daily"],
        ["user2", "Platform B", "https://example.com/user2", "2024-02-20", "2025-02-28", "89", "12", "Low activity"],
        ["user3", "Platform C", "https://example.com/user3", "2024-03-10", "2025-01-05", "0", "5", "Lurker account"],
        ["user4", "Platform D", "https://example.com/user4", "2024-04-01", "2025-03-15", "320", "89", "High engagement"],
        ["user5", "Platform E", "https://example.com/user5", "2024-05-12", "2024-12-01", "15", "3", "Inactive"],
        ["user6", "Platform A", "https://example.com/user6", "2024-06-08", "2025-03-10", "67", "22", "Secondary account"],
        ["user7", "Platform F", "https://example.com/user7", "2024-07-22", "2025-02-14", "203", "45", "Uses VPN"],
        ["user8", "Platform G", "https://example.com/user8", "2024-08-30", "2025-03-12", "12", "7", "Recently active"],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
    ]
    pdf.draw_table(headers, rows, col_w)

    pdf.sub_title("Cross-Platform Linkages")
    pdf.body_text(
        "Note any connections between accounts on different platforms - same email, "
        "similar handle variations, same profile picture, or shared content patterns."
    )
    pdf.body_text("Linkages Found: ___________________________________________________")
    pdf.body_text("_______________________________________________________________")
    pdf.ln(2)

    pdf.sub_title("Investigation Notes")
    pdf.body_text(
        "Record any additional observations, IP addresses, email addresses, phone numbers, "
        "or other identifying information uncovered during username tracking."
    )

    pdf.output(os.path.join(OUTPUT_DIR, "username-tracker-template.pdf"))
    print("Created username-tracker-template.pdf")


def make_social_media_investigation():
    pdf = OSPDF()
    pdf.alias_nb_pages()
    pdf.add_page()

    pdf.section_title("Social Media Investigation Sheet")
    pdf.body_text(
        "Document findings from social media investigations. Use one sheet per "
        "subject, listing all platforms and accounts discovered during the investigation."
    )

    pdf.sub_title("Case Information")
    pdf.body_text("Subject Name: .......................................................")
    pdf.body_text("Investigator: .......................................................")
    pdf.body_text("Date Range: .......................................................")
    pdf.body_text("Case Reference: .......................................................")
    pdf.ln(2)

    headers = ["Platform", "Account Name", "Profile Type", "Key Findings", "Screenshots", "Confidence", "Investigator Notes"]
    col_w = [22, 26, 24, 42, 22, 20, 34]
    rows = [
        ["Platform A", "user_john", "Personal", "Posted location data in bio", "3 captured", "High", "Verified via phone number"],
        ["Platform B", "john.official", "Business", "Linked to company website", "2 captured", "Medium", "Business email confirmed"],
        ["Platform C", "real_john", "Personal", "Private account - limited data", "1 captured", "Low", "Profile pic matches"],
        ["Platform D", "john_doe_99", "Fake", "Suspicious follower count", "0 captured", "Low", "Likely impersonator"],
        ["Platform E", "johnny_boy", "Personal", "Posted check-ins at work", "4 captured", "High", "Geolocation confirmed"],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
    ]
    pdf.draw_table(headers, rows, col_w)

    pdf.sub_title("Profile Type Definitions")
    pdf.body_text(
        "Personal: Individual's real account. Business: Official business or brand account. "
        "Fake: Impersonation, bot, or sock puppet account. "
        "Memorial: Account of a deceased person. "
        "Archived: Account no longer active but content preserved."
    )

    pdf.sub_title("Cross-Referencing Notes")
    pdf.body_text("Connection 1: ___________________________________________________")
    pdf.body_text("Connection 2: ___________________________________________________")
    pdf.body_text("Connection 3: ___________________________________________________")

    pdf.output(os.path.join(OUTPUT_DIR, "social-media-investigation-template.pdf"))
    print("Created social-media-investigation-template.pdf")


def make_dark_web_monitor():
    pdf = OSPDF()
    pdf.alias_nb_pages()
    pdf.add_page()

    pdf.section_title("Dark Web Monitor Log - Weekly")
    pdf.body_text(
        "Weekly monitoring log for dark web intelligence gathering. Document searches, "
        "findings, and risk assessments across forums, markets, and other dark web sites. "
        "Maintain chain of custody notes for any evidence collected."
    )

    pdf.sub_title("Monitoring Week")
    pdf.body_text("Week Of: .........................  Case Ref: .........................")
    pdf.body_text("Analyst: .........................  Review Date: .........................")
    pdf.ln(2)

    headers = ["Date Checked", "Site / Forum", "Keywords Searched", "Results Found", "Screenshots", "Risk Level", "Action Taken"]
    col_w = [22, 28, 34, 28, 22, 20, 36]
    rows = [
        ["2025-03-10", "darkforum1.onion", "subject_username, email", "3 relevant posts", "2 captured", "Medium", "Saved posts, logged URLs"],
        ["2025-03-10", "market2.onion", "full name, DOB", "No results", "0", "Low", "Logged search, no hits"],
        ["2025-03-11", "forum3.onion", "email@domain.com", "1 match found", "1 captured", "High", "User profile screenshot saved"],
        ["2025-03-12", "chat4.onion", "alias, phone number", "Partial match", "0", "Medium", "Need to revisit with VPN"],
        ["2025-03-13", "market5.onion", "SSN, passport", "Alert: data listed", "3 captured", "Critical", "Escalated to incident response"],
        ["2025-03-14", "forum6.onion", "company name, breach", "Mentioned in breach", "1 captured", "High", "Logged for report"],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
    ]
    pdf.draw_table(headers, rows, col_w)

    pdf.sub_title("Risk Level Definitions")
    pdf.body_text(
        "Critical: Direct threat or confirmed PII/data exposure requiring immediate action. "
        "High: Probable threat or likely data exposure. Monitor closely. "
        "Medium: Possible threat or indirect mention. Keep monitoring. "
        "Low: No threat detected or routine search. "
    )

    pdf.sub_title("Chain of Custody - Evidence Log")
    pdf.body_text("Exhibit # | Description | Date Collected | Collector | Hash / Checksum")
    pdf.body_text("_________ | ____________ | _______________ | _________ | __________________")
    pdf.body_text("_________ | ____________ | _______________ | _________ | __________________")
    pdf.body_text("_________ | ____________ | _______________ | _________ | __________________")

    pdf.ln(2)
    pdf.sub_title("Weekly Summary")
    pdf.body_text("Key Findings: ___________________________________________________")
    pdf.body_text("_______________________________________________________________")
    pdf.body_text("Actions Required: ________________________________________________")
    pdf.body_text("Next Review Date: ________________________________________________")

    pdf.output(os.path.join(OUTPUT_DIR, "dark-web-monitor-log.pdf"))
    print("Created dark-web-monitor-log.pdf")


def make_geolocation_analysis():
    pdf = OSPDF()
    pdf.alias_nb_pages()
    pdf.add_page()

    pdf.section_title("Geolocation Analysis Sheet")
    pdf.body_text(
        "Analyze images and media to determine geographic location. Document visual clues, "
        "coordinate estimates, and verification methods for each piece of media examined."
    )

    pdf.sub_title("Case Information")
    pdf.body_text("Case Ref: ........................  Analyst: ........................")
    pdf.body_text("Date of Analysis: ........................  Image Count: ........................")
    pdf.ln(2)

    headers = ["Image Ref", "Visual Clues", "Coordinate Estimate", "Verification Method", "Confidence", "Notes"]
    col_w = [20, 44, 34, 34, 22, 36]
    rows = [
        ["IMG_001", "Eiffel Tower, Paris street signs, French language billboard", "48.8584 N, 2.2945 E", "Google Maps street view", "High", "Landmark + street signs match"],
        ["IMG_002", "Desert terrain, saguaro cacti, arid vegetation", "32.2226 N, 110.9747 W", "Reverse image search", "Medium", "Likely Arizona/Sonoran desert"],
        ["IMG_003", "Red double-decker bus, black cab, phone booth", "51.5074 N, 0.1278 W", "Visual clues only", "High", "Central London - street pattern"],
        ["IMG_004", "Tropical beach, palm trees, thatched roofs", "8.5 S, 115.2 E", "Satellite imagery cross-ref", "Medium", "Likely Bali, Indonesia"],
        ["IMG_005", "Snow-capped mountains, pine forest, wooden chalets", "46.5 N, 7.5 E", "Topographic map matching", "Medium", "Likely Swiss Alps region"],
        ["IMG_006", "Modern skyline, river with bridges, skyscrapers", "40.7128 N, 74.0060 W", "Building silhouette matching", "High", "Lower Manhattan, NYC"],
        ["IMG_007", "Mud-brick buildings, arid climate, market scene", "15.5 N, 32.5 E", "Language on signs - Arabic", "Low", "Uncertain - need more data"],
        ["IMG_008", "Coastal cliffs, lighthouse, foggy conditions", "38.0 N, 122.0 W", "Compare to lighthouse registry", "Medium", "Likely Northern California coast"],
        ["", "", "", "", "", ""],
    ]
    pdf.draw_table(headers, rows, col_w)

    pdf.sub_title("Visual Clue Categories")
    pdf.body_text(
        "Landmarks: Distinctive buildings, monuments, natural features. "
        "Signs: Street signs, billboards, storefronts, license plates. "
        "Terrain: Mountains, desert, forest, urban, coastal. "
        "Vegetation: Native plants, tree types, agriculture. "
        "Architecture: Building styles, materials, construction methods. "
        "Weather: Clouds, precipitation, seasonal indicators. "
        "Infrastructure: Power lines, roads, street lights, signage style."
    )

    pdf.sub_title("Verification Methods")
    pdf.body_text(
        "Google Maps/Earth: Street view and satellite comparison. "
        "Reverse Image Search: Google Images, TinEye, Yandex. "
        "Sun Position Analysis: Suncalc, shadow length, time of day. "
        "Language/Text Analysis: Signs, documents visible in image. "
        "Geographic Features: Rivers, coastlines, mountain ranges."
    )

    pdf.output(os.path.join(OUTPUT_DIR, "geolocation-analysis-sheet.pdf"))
    print("Created geolocation-analysis-sheet.pdf")


def make_search_operator_cheatsheet():
    pdf = OSPDF()
    pdf.alias_nb_pages()
    pdf.add_page()

    pdf.section_title("Search Operator Cheatsheet")
    pdf.body_text(
        "Essential search operators for advanced Google, Bing, and general search engine "
        "queries. Mastering these operators dramatically improves OSINT collection efficiency. "
        "Use the syntax column for exact format, then see examples for real usage."
    )

    pdf.sub_title("Core Search Operators")
    headers = ["Operator", "Syntax", "Description", "Example"]
    col_w = [24, 42, 58, 66]
    rows = [
        ["site:", "site:example.com", "Limit results to a specific domain", "site:linkedin.com \"software engineer\""],
        ["filetype:", "filetype:ext", "Find files of a specific type", "filetype:pdf osint report"],
        ["intitle:", "intitle:keyword", "Keywords must appear in title", "intitle:\"investigation report\""],
        ["inurl:", "inurl:keyword", "Keywords must appear in URL", "inurl:admin login"],
        ["intext:", "intext:keyword", "Keywords must appear in body text", "intext:\"confidential\" filetype:pdf"],
        ["cache:", "cache:url", "View Google's cached version", "cache:example.com/page"],
        ["link:", "link:url", "Find pages linking to a URL", "link:example.com"],
        ["related:", "related:url", "Find similar websites", "related:nytimes.com"],
        ["info:", "info:url", "Get page info from Google index", "info:example.com"],
        ["daterange:", "daterange:start-end", "Filter by date (Julian format)", "daterange:2459000-2459100 breach"],
        ["* (wildcard)", "query * term", "Wildcard for any word(s)", "\"data * occurred\" breach"],
        ["- (minus)", "query -term", "Exclude a term from results", "security -breach"],
        ["OR", "query OR term", "Include either term", "osint OR open-source investigation"],
        ["\"\" (quotes)", "\"exact phrase\"", "Exact phrase match", "\"classified document\" pdf"],
        ["around(N)", "query AROUND(N) query", "Words within N words of each other", "breach AROUND(5) data"],
    ]
    pdf.draw_table(headers, rows, col_w)

    pdf.sub_title("Advanced Search Tips")
    pdf.body_text(
        "1) Combine operators: site:example.com intitle:report filetype:pdf\n"
        "2) Use parentheses for complex queries: (breach OR leak) AND (data OR information)\n"
        "3) The wildcard * only works in quoted phrases in Google\n"
        "4) Julian date converter needed for daterange: - use online tools\n"
        "5) cache: may return outdated or unavailable pages\n"
        "6) link: and related: have limited functionality in modern Google\n"
        "7) Try the same operators on Bing, DuckDuckGo, and Yandex - results vary"
    )

    pdf.sub_title("Quick Reference - Common Use Cases")
    pdf.body_text(
        "Find leaked credentials: filetype:xls intext:password OR intext:username site:pastebin.com\n"
        "Find exposed documents: intitle:confidential OR intitle:classified filetype:pdf -site:gov\n"
        "Profile discovery: site:facebook.com inurl:profile intitle:\"firstname lastname\"\n"
        "Email harvesting: intext:@company.com site:github.com OR site:pastebin.com\n"
        "Server info: intitle:\"index of\" inurl:backup OR inurl:admin\n"
        "Historical data: Use cache: or Wayback Machine (archive.org) for deleted content"
    )

    pdf.output(os.path.join(OUTPUT_DIR, "search-operator-cheatsheet.pdf"))
    print("Created search-operator-cheatsheet.pdf")


if __name__ == "__main__":
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    make_username_tracker()
    make_social_media_investigation()
    make_dark_web_monitor()
    make_geolocation_analysis()
    make_search_operator_cheatsheet()
    print("\nAll 5 templates generated successfully!")
