import PyPDF2
import sys

def read_pdf(file_path):
    try:
        with open(file_path, 'rb') as file:
            pdf_reader = PyPDF2.PdfReader(file)
            text = ""
            for page in pdf_reader.pages:
                text += page.extract_text()
            return text
    except Exception as e:
        return f"錯誤: {str(e)}"

if __name__ == "__main__":
    pdf_content = read_pdf("甲胖.pdf")
    print("PDF內容:")
    print("=" * 50)
    print(pdf_content)
    print("=" * 50)

