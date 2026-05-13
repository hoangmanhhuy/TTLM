import 'package:flutter/material.dart';
import 'package:lucide_icons/lucide_icons.dart';
import 'package:provider/provider.dart';
import '../viewmodels/viewmodels.dart';

class LoginScreen extends StatelessWidget {
  const LoginScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final auth = context.read<AuthViewModel>();

    return Scaffold(
      backgroundColor: const Color(0xFFF8FAFF),
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(24.0),
          child: Column(
            children: [
              const SizedBox(height: 40),
              // App Logo Placeholder
              Container(
                width: 64, h: 64,
                decoration: BoxDecoration(color: const Color(0xFF2563EB), borderRadius: BorderRadius.circular(24)),
                child: const Icon(LucideIcons.church, color: Colors.white, size: 36),
              ),
              const SizedBox(height: 16),
              const Text("Thông Tin Linh Mục", style: TextStyle(fontSize: 28, fontWeight: FontWeight.w900, color: Color(0xFF2563EB))),
              const Text("Đăng nhập Linh mục", style: TextStyle(color: Colors.grey, fontWeight: FontWeight.bold, fontSize: 12)),
              const SizedBox(height: 40),
              
              _buildLoginForm(context, auth),
              
              const Spacer(),
              TextButton.icon(
                onPressed: () => Navigator.pop(context),
                icon: const Icon(LucideIcons.chevronLeft, size: 16),
                label: const Text("Quay lại Trang chủ Giáo dân"),
              )
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildLoginForm(BuildContext context, AuthViewModel auth) {
    return Container(
      padding: const EdgeInsets.all(24),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(32),
        boxShadow: [BoxShadow(color: Colors.black.withOpacity(0.04), blurRadius: 30)],
      ),
      child: Column(
        children: [
          _buildTextField(LucideIcons.user, "Tên đăng nhập", "linhmuc@giaophan.org"),
          const SizedBox(height: 16),
          _buildTextField(LucideIcons.lock, "Mật khẩu", "••••••••", isPassword: true),
          const SizedBox(height: 24),
          ElevatedButton(
            onPressed: () {
              auth.login();
              Navigator.pop(context);
            },
            style: ElevatedButton.styleFrom(
              backgroundColor: const Color(0xFF2563EB),
              foregroundColor: Colors.white,
              minimumSize: const Size(double.infinity, 56),
              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
            ),
            child: const Text("ĐĂNG NHẬP", style: TextStyle(fontWeight: FontWeight.w900, letterSpacing: 1.2)),
          ),
        ],
      ),
    );
  }

  Widget _buildTextField(IconData icon, String label, String placeholder, {bool isPassword = false}) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(label.toUpperCase(), style: const TextStyle(fontSize: 10, fontWeight: FontWeight.w900, color: Colors.grey)),
        const SizedBox(height: 8),
        TextField(
          obscureText: isPassword,
          decoration: InputDecoration(
            hintText: placeholder,
            prefixIcon: Container(
              margin: const EdgeInsets.all(8),
              decoration: const BoxDecoration(color: Colors.white, shape: BoxShape.circle),
              child: Icon(icon, size: 18, color: Colors.grey),
            ),
            filled: true,
            fillColor: const Color(0xFFF8FAFC),
            border: OutlineInputBorder(borderRadius: BorderRadius.circular(18), borderSide: BorderSide.none),
          ),
        ),
      ],
    );
  }
}
 Broadway
